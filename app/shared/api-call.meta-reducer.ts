export interface ApiState {
  data: any;
  loading: boolean;
  loadSuccess: boolean;
  error: string;
}

export function apiCallMetaReducer(reducer) {
    let initialState: ApiState = {
        data: null,
        loading: true,
        loadSuccess: false,
        error: null
    };

    return function (state, action): ApiState {
        const nextState = reducer(state, action);
        let type = action.type.split(action.type)[0];

        switch (type) {
            case "LOAD":
                return { 
                    ...initialState 
                };

            case "LOAD_SUCCESS":
                return {
                    data: nextState,
                    loading: false,
                    loadSuccess: true,
                    error: null
                };

            case "LOAD_ERROR":
                return {
                    data: null,
                    loading: false,
                    loadSuccess: false,
                    error: action.payload
                };

            default:
                return {
                    data: nextState,
                    loading: false,
                    loadSuccess: true,
                    error: null
                };
        }
    }
}