import { Component, OnInit } from '@angular/core';
import { FormBuilder }  from '@angular/forms';
import { Router } from '@angular/router';
import { Store,select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectExpenseList } from '../store/selectors/expense.selector';
import { AddExpense } from '../store/actions/expense.action';
import { IExpense } from '../models/expense';
import { selectTotalBudget,selectCategoryList } from '../store/selectors/category.selectors';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
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
  private _store: Store<IAppState>,private router: Router) { }

  ngOnInit() {
    this.allCategories$.subscribe(values => this.allCategories=values);
    this.allExpenses$.subscribe(values => this.expensesList=values);
  }

  addExpense(){
    
    this._store.dispatch(new AddExpense(this.expense));

    alert("expenses added successfully");

  }
}
