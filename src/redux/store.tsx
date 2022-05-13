import {combineReducers} from "@reduxjs/toolkit";
import {createStore} from "@reduxjs/toolkit";
import appReducer from "./appReducer";

let reducers = combineReducers({
    app: appReducer,
});


export const store = createStore(reducers)
