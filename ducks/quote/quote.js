import { onQuoteRequested, onQuoteSucceeded, onQuoteFailed,QUOTE_REQUESTED,QUOTE_SUCCEEDED,QUOTE_FAILED } from "./ActionTypes";
import Axios from "axios";
import { API } from "../../globals";

/* Functions */
export const getQuote = ({ country, main_age, couple_age, plan_type, num_kids, kid_ages }) => {
    let x = { country, main_age, couple_age, plan_type, num_kids, kid_ages };
    return dispatch => {
        dispatch(onQuoteRequested());
        return Axios.post(API + "/get_quote_comparison", x)
            .then(res => {return res.data})
            .then(result => {
               
                let st = result;
                st.plans.map(x => {
                    x.selected = false;
                    if (x.company_id === 1 && x.name !== "Global Pass Choice II Latam" && x.name !== "Global Pass Choice II Mundial") {
                        x.dental = true;
                    }
                    return x;
                });
                dispatch(onQuoteSucceeded(st));
            }) 
            .catch(err => {
                console.log(err.response)
                dispatch(onQuoteFailed()); 
            });
    };
};  

const initialState = {
    params: {},
    plans: [],
    filters: {
        deductible: "all",
        company: "all",
        name: "all"
    }
}

export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUOTE_SUCCEEDED:
            return {
                ...state,
                ...action.payload,
                loadingQuote: false
            };
        case QUOTE_FAILED:
            return {
                ...state,
                loadingQuote: false
            };
        default:
            return state
    }
}
