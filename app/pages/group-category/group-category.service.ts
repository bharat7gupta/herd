import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import * as firebase from 'nativescript-plugin-firebase';
import { CommonService } from '../../shared/services/common.service';
import { FirebaseClientService } from '../../shared/services/firebase-client.service';

@Injectable()
export class GroupCategoryService {
  
  constructor(
        private zone: NgZone,
        private commonService: CommonService,
        private firebaseClient: FirebaseClientService
    ) { }

    loadGroupCategories(): Observable<any> {
        return this.firebaseClient.get('/groupCategory', 'category');
    }

    // addCategory(category: GroupCategory) {
    //     this.store.dispatch({ type: GroupCategoryActions.PROCESS_SAVE_ITEM });

    //     firebase.push(
    //         '/groupCategory',
    //         {
    //             name: category.name,
    //             description: category.description
    //         }
    //     )
    //     .then((result) => {
    //         this.store.dispatch({ type: GroupCategoryActions.SAVED_ITEM, payload: result.key });
    //     })
    //     .catch((error) => {
    //         this.store.dispatch({ type: GroupCategoryActions.SAVE_ERROR, payload: error });
    //     });
    // }


}