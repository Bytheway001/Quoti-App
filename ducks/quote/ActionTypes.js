/* Action Types */
export const QUOTE_REQUESTED = "QUOTE_REQUESTED";
export const QUOTE_SUCCEEDED = "QUOTE_SUCCEEDED";
export const QUOTE_FAILED = "QUOTE_FAILED";

export const COMPANY_FILTER_CHANGED = "COMPANY_FILTER_CHANGED";
export const DEDUCTIBLE_FILTER_CHANGED = "DEDUCTIBLE_FILTER_CHANGED";
export const PLAN_FILTER_CHANGED = "PLAN_FILTER_CHANGED";

export const TOGGLE_PLAN_SELECTION = "TOGGLE_PLAN_SELECTION";
export const TOGGLE_ENDOSO_SELECTION = "TOGGLE_ENDOSO_SELECTION";
export const TOGGLE_DENTAL = "TOGGLE_DENTAL"

export const CLEAN_QUOTE_DATA = "CLEAN_QUOTE_DATA";

/* Action Creators */
export const onQuoteRequested = () => ({ type: QUOTE_REQUESTED });
export const onQuoteSucceeded = data => ({type: QUOTE_SUCCEEDED,payload: data});
export const onQuoteFailed = data => ({ type: QUOTE_FAILED });

export const onCompanyFilterChange = company_id => ({type: COMPANY_FILTER_CHANGED,payload: company_id});
export const onDeductibleFilterChange = deductible => ({type: DEDUCTIBLE_FILTER_CHANGED,payload: deductible});
export const onPlanFilterChange = name => ({type: PLAN_FILTER_CHANGED,payload: name});

export const onTogglePlanSelection = (id, deductible) => ({type: TOGGLE_PLAN_SELECTION,payload: { id, deductible }});
export const onToggleEndoso = ({ endoso_id, plan_id, plan_deductible }) => ({type: TOGGLE_ENDOSO_SELECTION,payload: { endoso_id, plan_id, plan_deductible }});
export const onToggleDental= (id,deductible)=>({type:TOGGLE_DENTAL,payload:{plan_id: id,deductible: deductible}})





