import * as Toast from 'nativescript-toast';
import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';
import { FBData } from 'nativescript-plugin-firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { CommonService } from '../../shared/services/common.service';

@Injectable()
export class FirebaseClientService {

    constructor(
        private commonService: CommonService
    ) {}

    get(path: string, orderByFieldName: string): Observable<any> {
        return Observable.fromPromise(
            firebase.query(
                (result: FBData) => {
                    // if (!this.commonService.handleIfErrorResponse(result, this.store))
                    //     return;
                    console.log(result.value);
                    return result.value
                },
                path,
                {
                    singleEvent: true,
                    orderBy: {
                        type: firebase.QueryOrderByType.CHILD,
                        value: orderByFieldName
                    }
                }
            )
        );
    }

    post(path: string, data: any): Observable<any> {
        return Observable.fromPromise(firebase.push(path, data));
    }

    update() {

    }

    delete() {

    }
}