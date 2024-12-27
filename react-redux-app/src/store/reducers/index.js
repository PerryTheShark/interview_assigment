import { combineReducers } from "redux";
import { postReducer } from "./posts";

const appReducer = combineReducers({
    posts: postReducer,
});

export default appReducer;