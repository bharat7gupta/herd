import { GroupCategory } from "../../shared/models/group-category";
import { Utils } from '../../shared/utils';

export interface State {
    list: Array<GroupCategory>;
    loading: boolean;
    loadSuccess: boolean;
    loadError: boolean;
    errorMessage: string;
}

let initialState: State = {
    list: [],
    loading: true,
    loadSuccess: false,
    loadError: false,
    errorMessage: ""
}

export const Actions = {
    LOADING: "LOADING",
    LOAD_SUCCESS: "LOAD_SUCCESS",
    LOAD_ERROR: "LOAD_ERROR",
    ADD_ITEMS: "ADD_ITEMS"
}

export const groupCategoriesReducer = (state: State = initialState, {type, payload}) => {
    switch(type) {
        case Actions.ADD_ITEMS: 
            let newList = [];
            Object.keys(payload).forEach((key) => {
                let category = new GroupCategory();
                category.id = key;
                category.name = payload[key].name;
                category.description = payload[key].description;

                newList.push(category);
            });
            let sortedList = [...state.list, ...newList].sort(Utils.sortBy("name"));

            return { 
                ...state,
                list: sortedList
            };

        case Actions.LOADING:
            return { ...initialState };

        case Actions.LOAD_SUCCESS:
            return { 
                ...state, 
                loading: false,
                loadSuccess: true,
                loadError: false
            };

        case Actions.LOAD_ERROR:
            return { 
                ...state, 
                loading: false,
                loadSuccess: false,
                loadError: true,
                errorMessage: payload
            };

        default:
            return state;
    }
}