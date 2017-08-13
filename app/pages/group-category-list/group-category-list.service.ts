import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { GroupCategory } from '../../shared/models/group-category';
import { GroupCategoriesState, GroupCategoryListActions } from './group-category-list.reducer';
import { GroupCategoryState, GroupCategoryActions } from './new-group-category/new-group-category.reducer';
import * as firebase from 'nativescript-plugin-firebase';
import { FBData } from 'nativescript-plugin-firebase';
import { CommonService } from '../../shared/services/common.service';

@Injectable()
export class GroupCategoryListService {

    constructor(
        private store: Store<GroupCategoriesState>,
        private zone: NgZone,
        private commonService: CommonService
    ) { }

    loadGroupCategories() {
        this.store.dispatch({ type: GroupCategoryListActions.LOADING });

        firebase.query(
            (result: FBData) => {
                if (!this.commonService.handleIfErrorResponse(result, this.store))
                    return;

                this.zone.run(() => {
                    this.store.dispatch({ type: GroupCategoryListActions.ADD_ITEMS, payload: result.value });
                    this.store.dispatch({ type: GroupCategoryListActions.LOAD_SUCCESS });
                });
            },
            '/groupCategory',
            {
                singleEvent: true,
                orderBy: {
                    type: firebase.QueryOrderByType.CHILD,
                    value: 'category'
                }
            });
    }

    addCategory(category: GroupCategory) {
        this.store.dispatch({ type: GroupCategoryActions.PROCESS_SAVE_ITEM });

        firebase.push(
            '/groupCategory',
            {
                name: category.name,
                description: category.description
            }
        )
        .then((result) => {
            this.store.dispatch({ type: GroupCategoryActions.SAVED_ITEM, payload: result.key });
        })
        .catch((error) => {
            this.store.dispatch({ type: GroupCategoryActions.SAVE_ERROR, payload: error });
        });
    }
}