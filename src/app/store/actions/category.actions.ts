import {Action} from "@ngrx/store"
import { ICategory } from '../../models/category';


export enum ECategoryActions{
    AddCategory='[] Add Category',
    UpdateExpenseLimit='[] Update Expense Limit'
}

export class AddCategory implements Action{
 public readonly type =ECategoryActions.AddCategory
 constructor(public payload:ICategory){}
    
}   
export class UpdateExpenseLimit implements Action{
    public readonly type =ECategoryActions.UpdateExpenseLimit
    constructor(public payload:number){}
       
   }   

export type CategoryActions = AddCategory |UpdateExpenseLimit;
