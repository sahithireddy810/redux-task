import {Injectable} from "@angular/core";
import {Effect,ofType,Actions} from "@ngrx/effects";
import {switchMap} from "rxjs/operators";
import { Store, Action } from '@ngrx/store';
import {of} from "rxjs";
import {IExpense} from "../../models/expense";
import {AddExpense,EExpenseActions} from "../Actions/expense.action";
import { tap, map,withLatestFrom } from 'rxjs/operators';
import {IExpenseState} from "../state/expense.state";
@Injectable()
 export class ExpenseEffects{
// @Effect()
// addCategory$=this._actions$.pipe(
//     ofType<AddCategory>(ECategoryActions.AddCategory),
//     switchMap((payload)=>return of(new ))
// )


constructor(private _actions$:Actions,private store$: Store<IExpenseState>){}


@Effect({ dispatch: false })
storeActions$ =this._actions$.pipe(
  // intercepts actions for adding, checking off, or removing items   
  ofType(
    
    EExpenseActions.AddExpense,
  ),
  tap(action => {
    // get the current actions from local storage
    const storedActions = window.localStorage.getItem('expenses');
    // parse the actions as an array
    const actions = storedActions ? JSON.parse(storedActions) : [];
    // add the new action as first item to the actions array  
    const newActions = [action.payload, ...actions];
    // serialize the new array and update local storage
    window.localStorage.setItem(
      'expenses', 
      JSON.stringify(newActions)
    );
  }),
);

@Effect({ dispatch: false })
storeDeleteExpenseActions$ =this._actions$.pipe(
  // intercepts actions for adding, checking off, or removing items   
  ofType(
    
    EExpenseActions.DeleteExpense,
  ),
  tap(action => {
    // get the current actions from local storage
    const storedExpenses = window.localStorage.getItem('expenses');
    // parse the actions as an array
    const expenses = storedExpenses ? JSON.parse(storedExpenses) : [];
    // add the new action as first item to the actions array
    var expense = expenses.find(t => t.id === action.payload);
    var index = expenses.indexOf(expense);  
    const newActions = [ ...expenses.slice(0, index),
        Object.assign({}, expense, {isActive:false}),
        ...expenses.slice(index+1)];
    // serialize the new array and update local storage
    window.localStorage.setItem(
      'expenses', 
      JSON.stringify(newActions)
    );
  }),
);

@Effect({ dispatch: false })
storeUnDeleteExpenseActions$ =this._actions$.pipe(
  // intercepts actions for adding, checking off, or removing items   
  ofType(
    
    EExpenseActions.UndoDeleteExpense,
  ),
  tap(action => {
    // get the current actions from local storage
    const storedExpenses = window.localStorage.getItem('expenses');
    // parse the actions as an array
    const expenses = storedExpenses ? JSON.parse(storedExpenses) : [];
    // add the new action as first item to the actions array
    var expense = expenses.find(t => t.id === action.payload);
    var index = expenses.indexOf(expense);  
    const newActions = [ ...expenses.slice(0, index),
        Object.assign({}, expense, {isActive:true}),
        ...expenses.slice(index+1)];
    // serialize the new array and update local storage
    window.localStorage.setItem(
      'expenses', 
      JSON.stringify(newActions)
    );
  }),
);

 }