import { SELECTED_USER_DETAIL, IS_TO_SHOW_LOADER  } from './types';

const initialState = {
    loading: false,
    selectedUserDetail : []
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case SELECTED_USER_DETAIL: return {
            ...state,
            selectedUserDetail: action.payload
        }
        case IS_TO_SHOW_LOADER :
            return {
            ...state,
            loading: action.payload
        }
        default: return state
    }
}

export default reducer