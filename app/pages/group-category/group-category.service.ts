import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { GroupCategory } from '../../shared/models/group-category';
import * as groupCategory from './group-category.reducer';
import * as newGroupCategory from './new-group-category.reducer';
import * as firebase from 'nativescript-plugin-firebase';
import { FBData } from 'nativescript-plugin-firebase';
import { CommonService } from '../../shared/services/common.service';
import { FirebaseClientService } from '../../shared/services/firebase-client.service';

@Injectable()
export class GroupCategoryService {

    constructor(
        private store: Store<groupCategory.State>,
        private zone: NgZone,
        private commonService: CommonService,
        private firebaseClient: FirebaseClientService
    ) { }

    loadGroupCategories() {
        this.store.dispatch({ type: groupCategory.Actions.LOADING });
        this.firebaseClient.get('/groupCategory', 'category')
            .subscribe((data) => {
                if(data.error)
                    this.store.dispatch({ type: groupCategory.Actions.LOAD_ERROR, payload: data.error });
                else if(!data.value || data.value===null) 
                    this.store.dispatch({ type: groupCategory.Actions.LOAD_ERROR, payload: "Empty Response!" });
                else{
                    this.store.dispatch({ type: groupCategory.Actions.ADD_ITEMS, payload: data.value });
                    this.store.dispatch({ type: groupCategory.Actions.LOAD_SUCCESS });
                }
            });
    }

    addCategory(category: GroupCategory) {
        this.store.dispatch({ type: newGroupCategory.Actions.PROCESS_SAVE_ITEM });

        firebase.push(
            '/groupCategory',
            {
                name: category.name,
                description: category.description
            }
        )
        .then((result) => {
            this.store.dispatch({ type: newGroupCategory.Actions.SAVED_ITEM, payload: result.key });
        })
        .catch((error) => {
            this.store.dispatch({ type: newGroupCategory.Actions.SAVE_ERROR, payload: error });
        });
    }
}