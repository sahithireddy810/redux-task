
import { IExpense } from '../../models/expense';
const expenseJson = window.localStorage.getItem('expenses');
const expense = expenseJson ? JSON.parse(expenseJson) : [];
export interface IExpenseState {
    
    expenses:IExpense[];
}

export const INITIAL_EXPENSE_STATE: IExpenseState = {
 
    expenses:expense,
}