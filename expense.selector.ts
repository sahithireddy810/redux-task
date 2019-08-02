import {createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {IExpenseState} from "../state/expense.state";
const selectExpenses=(state:IAppState)=>state.expenses;
export const selectExpenseList=createSelector(
    selectExpenses,(state:IExpenseState)=>state.expenses
)

