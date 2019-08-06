import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LocalStorageService } from "src/app/storage.Service";
import { Router } from '@angular/router';

// import { NgRedux, select } from '@angular-redux/store';
// import { IAppState } from '../store';
// import { ADD_CATEGORY,UPDATE_BUDGET } from '../store/actions/actions';

import { Store,select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectExpenseList } from '../store/selectors/expense.selector';
import { DeleteExpense,UndoDeleteExpense } from '../store/actions/expense.action';
import { IExpense } from '../models/expense';
import { selectTotalBudget,selectCategoryList } from '../store/selectors/category.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  expensesList=[]
  allEpensess$=this._store.pipe(select(selectExpenseList));
  allCategories=[]
  allCategories$= this._store.pipe(select(selectCategoryList));
  constructor(
    private _store: Store<IAppState>,private _router: Router) { }
  
    ngOnInit() {
      this.allCategories$.subscribe(values => this.allCategories=values);
      this.allEpensess$.subscribe(values => this.expensesList=values);
    }
    edit(expense:IExpense){
    this._router.navigate(['editExpense',expense])
    }

    remove(expense:IExpense){
      this._store.dispatch(new DeleteExpense(expense.id))
    }
    undoRemove(expense:IExpense){
      this._store.dispatch(new UndoDeleteExpense(expense.id))
    }
}
