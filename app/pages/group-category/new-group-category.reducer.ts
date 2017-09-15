import { GroupCategory } from "../../shared/models/group-category";

export interface State {
    processingSaveItem: boolean;
    saved: boolean;
    key: string;
    errorMessage: string;
}

let initialState: State = {
    processingSaveItem: false,
    saved: false,
    key: null,
    errorMessage: ""
}

export const Actions = {
    INITIALIZE: "INITIALIZE",
    PROCESS_SAVE_ITEM: "PROCESS_SAVE_ITEM",
    SAVED_ITEM: "SAVED_ITEM",
    SAVE_ERROR: "SAVE_ERROR"
}

export const groupCategoryReducer = (state: State = initialState, {type, payload}) => {
    switch(type) {
        case Actions.INITIALIZE:
            return { ...initialState };

        case Actions.PROCESS_SAVE_ITEM:
            return { 
                ...state, 
                processingSaveItem: true
            };

        case Actions.SAVED_ITEM:
            return {
                ...state,
                saved: true,
                key: payload
            };

        case Actions.SAVE_ERROR:
            return { 
                ...state,
                errorMessage: payload
            };

        default:
            return state;
    }
}