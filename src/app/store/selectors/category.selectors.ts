import {createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {ICategoryState} from "../state/category.state";
const selectCategories=(state:IAppState)=>state.categories;
export const selectCategoryList=createSelector(
    selectCategories,(state:ICategoryState)=>state.categories
)

export const selectTotalBudget=createSelector(
    selectCategories,(state:ICategoryState)=>state.totalBudget
)