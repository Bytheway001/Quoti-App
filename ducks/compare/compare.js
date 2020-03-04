import { onPlanListSucceeded, onPlanListRequested, onPlanListFailed, PLAN_LIST_SUCCEEDED, PLAN_LIST_FAILED } from "./ActionTypes";
import Axios from "axios";
import { API } from "../../globals";


const initialState = {
    planList: [],
    selectedPlans: []
}



export const getPlanList = () => {
    return dispatch => {
        dispatch(onPlanListRequested());
        return Axios.get(API + "/plans")
            .then(result => {
                if (result.status === 200) {
                    dispatch(onPlanListSucceeded(result.data)); 
                } else {
                    alert("err");
                } 
            })
            .catch(err => {
                dispatch(onPlanListFailed());
            });
    };
}



export const compareReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case PLAN_LIST_SUCCEEDED:
            return {
                ...state,
                loading:false,
                planList:action.payload,
            };
        default:
            return state
    }
}
