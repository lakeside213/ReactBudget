import { combineReducers } from "redux";
import dialog from "./dialog";
import user from "./user";
const rootReducer = combineReducers({
    dialog,
    user
});

export default rootReducer;
