import { POST_SET_ALL } from "../types";

export const postReducer = (state = [], action) => {
    switch(action.type) {
        case POST_SET_ALL:
            return {...state, post:action.posts};
        default:
            return state;
    }
}