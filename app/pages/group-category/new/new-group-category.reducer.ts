import { GroupCategory } from "../../../shared/models/group-category";

export interface GroupCategoryState {
    processingSaveItem: boolean;
    saved: boolean;
    key: string;
    errorMessage: string;
}

let initialState: GroupCategoryState = {
    processingSaveItem: false,
    saved: false,
    key: null,
    errorMessage: ""
}

export const GroupCategoryActions = {
    INITIALIZE: "INITIALIZE",
    PROCESS_SAVE_ITEM: "PROCESS_SAVE_ITEM",
    SAVED_ITEM: "SAVED_ITEM",
    SAVE_ERROR: "SAVE_ERROR"
}

export const groupCategoryReducer = (state: GroupCategoryState = initialState, {type, payload}) => {
    switch(type) {
        case GroupCategoryActions.INITIALIZE:
            return Object.assign({}, initialState);

        case GroupCategoryActions.PROCESS_SAVE_ITEM:
            return Object.assign({}, state, {
                processingSaveItem: true
            });

        case GroupCategoryActions.SAVED_ITEM:
            return Object.assign({}, state, {
                saved: true,
                key: payload
            });

        case GroupCategoryActions.SAVE_ERROR:
            return Object.assign({}, state, {
                errorMessage: payload
            });

        default:
            return state;
    }
}