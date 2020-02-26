import { combineReducers } from "redux";
import { quoteReducer } from "./quote/quote";

export const rootReducer = combineReducers({
    quote:quoteReducer
})