import {combineReducers} from "redux";
import {moviesReduser} from './movies'
import {gengersReducer} from "./gengers";
import {themeReduser} from "./theme";

export const rootReduser = combineReducers({
    gengersReducer,
    moviesReduser,
    themeReduser
})
