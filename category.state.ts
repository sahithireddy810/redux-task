import { ICategory } from '../../models/category';
export interface ICategoryState {
    categories: ICategory[];
    totalBudget: number;
}
export const INITIAL_CATEGORY_STATE: ICategoryState = {
    categories: [],
    totalBudget: 1230
}