export const PLAN_LIST_REQUESTED = "PLAN_LIST_REQUESTED"
export const PLAN_LIST_SUCCEEDED = "PLAN_LIST_SUCCEEDED"
export const PLAN_LIST_FAILED = "PLAN_LIST_FAILED"

export const onPlanListRequested=()=>({type:PLAN_LIST_REQUESTED})
export const onPlanListSucceeded=(data)=>({type:PLAN_LIST_SUCCEEDED,payload:data})
export const onPlanListFailed = (error)=>({type:PLAN_LIST_FAILED,payload:error})


