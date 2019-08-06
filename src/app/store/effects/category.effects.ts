import {Injectable} from "@angular/core";
import {Effect,ofType,Actions} from "@ngrx/effects";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {ICategory} from "../../models/category";
import {AddCategory,ECategoryActions} from "../Actions/category.actions";
import { tap, map } from 'rxjs/operators';
@Injectable()
 export class CategoryEffects{
// @Effect()
// addCategory$=this._actions$.pipe(
//     ofType<AddCategory>(ECategoryActions.AddCategory),
//     switchMap((payload)=>return of(new ))
// )


constructor(private _actions$:Actions){}


@Effect({ dispatch: false })
storeActions$ =this._actions$.pipe(
  // intercepts actions for adding, checking off, or removing items   
  ofType(
    
    ECategoryActions.AddCategory,
  ),
  tap(action => {
    // get the current actions from local storage
    const storedActions = window.localStorage.getItem('categoty');
    // parse the actions as an array
    const actions = storedActions ? JSON.parse(storedActions) : [];
    // add the new action as first item to the actions array  
    const newActions = [action.payload, ...actions];
    // serialize the new array and update local storage
    window.localStorage.setItem(
      'categoty', 
      JSON.stringify(newActions)
    );
  }),
);


@Effect({ dispatch: false })
storeExpenseLimitActions$ =this._actions$.pipe(
  // intercepts actions for adding, checking off, or removing items   
  ofType(
    
    ECategoryActions.UpdateExpenseLimit,
  ),
  tap((action) => {

    window.localStorage.setItem(
      'budget', 
      action.payload
    );
  }),
);


 }