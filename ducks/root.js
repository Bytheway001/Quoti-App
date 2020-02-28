import { combineReducers } from "redux";
import { quoteReducer } from "./quote/quote";
import { sessionReducer } from "./session";

export const rootReducer = combineReducers({
    quote:quoteReducer,
    session:sessionReducer
   
})