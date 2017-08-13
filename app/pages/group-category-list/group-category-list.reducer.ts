import { GroupCategory } from "../../shared/models/group-category";

export interface GroupCategoriesState {
    categoryList: Array<GroupCategory>;
    loading: boolean;
    loadSuccess: boolean;
    loadError: boolean;
    errorMessage: string;
}

let initialState: GroupCategoriesState = {
    categoryList: [],
    loading: true,
    loadSuccess: false,
    loadError: false,
    errorMessage: ""
}

export const GroupCategoryListActions = {
    LOADING: "LOADING",
    LOAD_SUCCESS: "LOAD_SUCCESS",
    LOAD_ERROR: "LOAD_ERROR",
    ADD_ITEMS: "ADD_ITEMS"
}

export const groupCategoriesReducer = (state: GroupCategoriesState = initialState, {type, payload}) => {
    switch(type) {
        case GroupCategoryListActions.ADD_ITEMS: 
            let items = Object.keys(payload).map((key) => {
                let category = new GroupCategory();
                category.id = key;
                category.name = payload[key].name;
                category.description = payload[key].description;

                return category;
            });
            return Object.assign({}, state, {
                categoryList: [...state.categoryList, ...items]
                    .sort((t1, t2) => { 
                        if(t1.name < t2.name) return -1;
                        if(t1.name > t2.name) return 1;
                        return 0;
                     })
            });

        case GroupCategoryListActions.LOADING:
            return initialState;

        case GroupCategoryListActions.LOAD_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                loadSuccess: true,
                loadError: false
            });

        case GroupCategoryListActions.LOAD_ERROR:
            return Object.assign({}, state, {
                loading: false,
                loadSuccess: false,
                loadError: true,
                errorMessage: payload
            });

        default:
            return state;
    }
}