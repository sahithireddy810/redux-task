import {EExpenseActions,ExpenseActions,DeleteExpense,UndoDeleteExpense,EditExpense} from "../actions/expense.action";
import {INITIAL_EXPENSE_STATE,IExpenseState} from "../state/expense.state";

export const expenseReducer=(
    state=INITIAL_EXPENSE_STATE,
    action:ExpenseActions
):IExpenseState=>{
    switch (action.type) {
        case EExpenseActions.AddExpense:{
            action.payload.id = state.expenses.length + 1; 
            return Object.assign({}, state, {
                                 expenses: state.expenses.concat(Object.assign({}, action.payload))
                         })
            //  {
            //     ...state,
            //     expenses : [...state.expenses,action.payload]
            // };
        }
        case EExpenseActions.DeleteExpense:{
                           var expense = state.expenses.find(t => t.id === action.payload);
                var index = state.expenses.indexOf(expense);
                return Object.assign({}, state, {
                    expenses: [
                        ...state.expenses.slice(0, index),
                        Object.assign({}, expense, {isActive:false}),
                        ...state.expenses.slice(index+1)
                    ]
        })
        }
        case EExpenseActions.UndoDeleteExpense:{
                    var expense = state.expenses.find(t => t.id === action.payload);
        var index = state.expenses.indexOf(expense);
        return Object.assign({}, state, {
            expenses: [
                ...state.expenses.slice(0, index),
                Object.assign({}, expense, {isActive:true}),
                ...state.expenses.slice(index+1)
            ]
        })
        }
        case EExpenseActions.EditExpense:{
                var expense = state.expenses.find(t => t.id == action.payload.id);
                var index = state.expenses.indexOf(expense);
                return Object.assign({}, state, {
                    expenses: [
                        ...state.expenses.slice(0, index),
                        Object.assign({}, expense, action.payload),
                        ...state.expenses.slice(index+1)
                    ]
                })
        }
        default:
            return state;
}

}

// export function rootReducer(state: IAppState, action): IAppState {
//     switch (action.type) {
//         case ADD_CATEGORY:
//             action.category.id = state.categories.length + 1;    
//             return Object.assign({}, state, {
//                 categories: state.categories.concat(Object.assign({}, action.category))
                
//         })
//         case UPDATE_BUDGET:
//             return Object.assign({}, state, {
               
//                 totalBudget: action.totalBudget
//         })
//         case ADD_EXPENSE:
//             action.expense.id = state.expenses.length + 1;    
//             return Object.assign({}, state, {
//                 expenses: state.expenses.concat(Object.assign({}, action.expense))
//         })
//         case EDIT_EXPENSE:
//                 var expense = state.expenses.find(t => t.id === action.expense.id);
//                 var index = state.expenses.indexOf(expense);
//                 return Object.assign({}, state, {
//                     todos: [
//                         ...state.expenses.slice(0, index),
//                         Object.assign({}, expense, action.expense),
//                         ...state.expenses.slice(index+1)
//                     ]
//                 })
               
//         case DELETE_EXPENSE:
//                 var expense = state.expenses.find(t => t.id === action.expense.id);
//                 var index = state.expenses.indexOf(expense);
//                 return Object.assign({}, state, {
//                     todos: [
//                         ...state.expenses.slice(0, index),
//                         Object.assign({}, expense, {isActive:true}),
//                         ...state.expenses.slice(index+1)
//                     ],
//                     lastUpdate: new Date()
//         })
        
//     }
//     return state;
// }

