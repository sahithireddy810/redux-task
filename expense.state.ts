
import { IExpense } from '../../models/expense';
export interface IExpenseState {
    
    expenses:IExpense[];
}
export const INITIAL_EXPENSE_STATE: IExpenseState = {
 
    expenses:[],
}