import {Action} from "@ngrx/store"
import { ICategory } from '../../models/category';


export enum ECategoryActions{
    AddCategory='[] Add Category'
}

export class AddCategory implements Action{
 public readonly type =ECategoryActions.AddCategory
 constructor(public payload:ICategory){}
    
}   

export type CategoryActions = AddCategory;
