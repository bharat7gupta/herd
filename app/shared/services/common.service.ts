import * as Toast from 'nativescript-toast';
import { GroupCategoryListActions } from "../../pages/group-category-list/group-category-list.reducer";
import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class CommonService {

    constructor(
        private zone: NgZone
    ) {}

    handleIfErrorResponse(response, storeHandle): boolean {
        if (response.error) {
            this.zone.run(() => {
                storeHandle.dispatch({ type: GroupCategoryListActions.LOAD_ERROR, payload: response.error });
            });
            return false;
        }

        if(response.value === null) {
            this.zone.run(() => {
                storeHandle.dispatch({ type: GroupCategoryListActions.LOAD_ERROR, payload: "Empty Response" });
            });
            return false;
        }

        return true;
    }
}