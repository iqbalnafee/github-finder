import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS
} from '../types'



export default (state,action) => {
    switch(action.type){
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,

            }
        default:
            return state;
    }
}
