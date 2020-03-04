import { combineReducers } from "redux";
import { quoteReducer } from "./quote/quote";
import { sessionReducer } from "./session";
import { compareReducer } from "./compare/compare";

export const rootReducer = combineReducers({
    quote:quoteReducer,
    session:sessionReducer,
    compare:compareReducer 
   
})