import {ActionReducerMap} from  "@ngrx/store";

import {routerReducer} from "@ngrx/router-store";
import {IAppState} from "../state/app.state";
import {categoryReducer} from "./category.reducers"
import {expenseReducer} from "./expense.reducers"

export const rootReducer :ActionReducerMap<IAppState,any>={
    router:routerReducer,
    categories:categoryReducer,
    expenses:expenseReducer
    
}