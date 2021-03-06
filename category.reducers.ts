import {ECategoryActions,CategoryActions} from "../actions/category.actions";
import {INITIAL_CATEGORY_STATE,ICategoryState} from "../state/category.state";

export const categoryReducer=(
    state=INITIAL_CATEGORY_STATE,
    action:CategoryActions
):ICategoryState=>{
    switch (action.type) {
        case ECategoryActions.AddCategory:{
            action.payload.id = state.categories.length + 1; 
            return{
                ...state,
                categories : [...state.categories,action.payload]
            };
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

