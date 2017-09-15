import * as groupCategory from './group-category.actions';
import { GroupCategory } from "../../shared/models/group-category";

export interface State {
  loaded: boolean;
  loading: boolean;
  error: string,
  ids: string[],
  entities: { [id: string]: any };
}

export const initialState: State = {
  loaded: false,
  loading: false,
  error: null,
  ids: [],
  entities: null,
}

export function reducer(state = initialState, action: groupCategory.Actions): State {
  switch (action.type) {
    case groupCategory.ADD_ITEMS: 
      return Object.assign({}, state, {
          entities: { ...state.entities, ...action.payload }
      });

    case groupCategory.LOAD: 
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        erroe: null
      });

    case groupCategory.LOAD_SUCCESS: 
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        erroe: null
      });
      
    case groupCategory.LOAD_FAIL: 
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        erroe: action.payload
      });

    default: {
      return {
        ...state
      };
    }
  }
}