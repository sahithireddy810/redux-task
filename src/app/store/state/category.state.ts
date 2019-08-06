import { ICategory } from '../../models/category';
const categotiesJson = window.localStorage.getItem('categoty');
const budget = window.localStorage.getItem('budget');
const categoties = categotiesJson ? JSON.parse(categotiesJson) : [];
export interface ICategoryState {
    categories: ICategory[];
    totalBudget: number;
}
export const INITIAL_CATEGORY_STATE: ICategoryState = {
    categories: categoties,
    totalBudget: Number(budget)||0
}