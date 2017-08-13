import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { GroupCategory } from '../../shared/models/group-category';
import { GroupCategoriesState, GroupCategoryListActions } from './group-category-list.reducer';
import * as firebase from 'nativescript-plugin-firebase';
import { FBData } from 'nativescript-plugin-firebase';

@Injectable()
export class GroupCategoryListService {

    constructor(
        private store: Store<GroupCategoriesState>,
        private zone: NgZone
    ) { }

    loadGroupCategories() {
        this.store.dispatch({ type: GroupCategoryListActions.LOADING });

        firebase.query(
            (result: FBData) => {
                if (result.error) {
                    this.zone.run(() => {
                        this.store.dispatch({ type: GroupCategoryListActions.LOAD_ERROR, payload: result.error });
                    });
                    return;
                }

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
}