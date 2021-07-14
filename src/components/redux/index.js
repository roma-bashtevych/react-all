import {rootReduser} from "./reducers";
import {createStore} from "redux";

export const store = createStore(rootReduser);
