import {combineReducers} from "redux";
import {counterReduser} from "./counter";
import {todosReduser} from "./todos";

export const rootReduser = combineReducers({
    todosReduser,
    counterReduser
})