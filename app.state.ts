import {RouterReducerState} from "@ngrx/router-store";
import {ICategoryState,INITIAL_CATEGORY_STATE} from "./category.state"
import {IExpenseState,INITIAL_EXPENSE_STATE} from "./expense.state"

export interface IAppState {
    router?:RouterReducerState;
    expenses:IExpenseState;
    categories:ICategoryState;
}
export const INITIAL_APP_STATE: IAppState = {
 
    expenses:INITIAL_EXPENSE_STATE,
    categories:INITIAL_CATEGORY_STATE
}

export function getIntialState():IAppState{
    return INITIAL_APP_STATE;
}