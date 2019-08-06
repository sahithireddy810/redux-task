import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LocalStorageService } from "src/app/storage.Service";
import { Router ,ActivatedRoute} from '@angular/router';

// import { NgRedux, select } from '@angular-redux/store';
// import { IAppState } from '../store';
// import { ADD_CATEGORY,UPDATE_BUDGET } from '../store/actions/actions';

import { Store,select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectExpenseList } from '../store/selectors/expense.selector';
import { EditExpense } from '../store/actions/expense.action';
import { IExpense } from '../models/expense';
import { selectTotalBudget,selectCategoryList } from '../store/selectors/category.selectors';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {
  expense:IExpense={
    id: 0,
    categoryName: "",
    itemName: "",
    amount:0,
    expenseDate:new Date(),
    isActive: true
};
  expensesList=[]
  allExpenses$=this._store.pipe(select(selectExpenseList));
  allCategories=[]
  allCategories$= this._store.pipe(select(selectCategoryList));
  constructor(private formBuilder: FormBuilder,
    private _store: Store<IAppState>,private _route: ActivatedRoute) { }
  
    ngOnInit() {
    this.expense.id=this._route.snapshot.params.id;
    this.expense.categoryName=this._route.snapshot.params.categoryName;
    this.expense.itemName=this._route.snapshot.params.itemName;
    this.expense.amount=this._route.snapshot.params.amount;
    this.expense.expenseDate=this._route.snapshot.params.expenseDate;

      this.allCategories$.subscribe(values => this.allCategories=values);
      this.allExpenses$.subscribe(values => this.expensesList=values);
    }
    editExpense(){
      this._store.dispatch(new EditExpense(this.expense));
      alert("expenses edited successfully");
    }

}
