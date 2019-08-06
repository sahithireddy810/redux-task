import {Action} from "@ngrx/store"
import { IExpense } from '../../models/expense';


export enum EExpenseActions{
    AddExpense='[] Add Expense',
    EditExpense='[] Edit Expense',
    DeleteExpense='[] Delete Expense',
    UndoDeleteExpense='[] Undo Delete Expense',
}

export class AddExpense implements Action{
 public readonly type =EExpenseActions.AddExpense
 constructor(public payload:IExpense){} 
}   
export class EditExpense implements Action{
    public readonly type =EExpenseActions.EditExpense
    constructor(public payload:IExpense){} 
   }   

export class DeleteExpense implements Action{
    public readonly type =EExpenseActions.DeleteExpense
    constructor(public payload:number){} 
   }   
   export class UndoDeleteExpense implements Action{
    public readonly type =EExpenseActions.UndoDeleteExpense
    constructor(public payload:number){} 
   }  

export type ExpenseActions = AddExpense|DeleteExpense |UndoDeleteExpense |EditExpense;
