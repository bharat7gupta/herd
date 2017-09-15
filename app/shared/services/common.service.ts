import * as Toast from 'nativescript-toast';
import * as groupCategory from "../../pages/group-category/group-category.reducer";
import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class CommonService {

    constructor(
        private zone: NgZone
    ) {}

    handleIfErrorResponse(response, storeHandle): boolean {
        if (response.error) {
            this.zone.run(() => {
                storeHandle.dispatch({ type: groupCategory.Actions.LOAD_ERROR, payload: response.error });
            });
            return false;
        }

        if(response.value === null) {
            this.zone.run(() => {
                storeHandle.dispatch({ type: groupCategory.Actions.LOAD_ERROR, payload: "Empty Response" });
            });
            return false;
        }

        return true;
    }
}