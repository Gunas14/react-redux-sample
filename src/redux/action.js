import { SELECTED_USER_DETAIL, IS_TO_SHOW_LOADER } from './types';

export const setSelectedUserDetail = (detail) =>{
    return{
        type : SELECTED_USER_DETAIL,
        payload : detail
    }
}

export const enableLoader = (value) =>{
    return{
        type : IS_TO_SHOW_LOADER,
        payload : value
    }
}