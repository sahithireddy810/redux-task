import { Component, OnInit } from '@angular/core';
import { FormBuilder }  from '@angular/forms';
import { Router } from '@angular/router';
import { Store,select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectTotalBudget,selectCategoryList } from '../store/selectors/category.selectors';
import { AddCategory } from '../store/actions/category.actions';
import { ICategory } from '../models/category';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  // @select() categories;
  // @select() totalBudget;

  budget=0;
  // submitted = false;
  allCategories=[]
   allCategories$= this._store.pipe(select(selectCategoryList));
  totalBudget$=this._store.pipe(select(selectTotalBudget));
  
  category="";
  constructor(private formBuilder: FormBuilder,
    private _store: Store<IAppState>,private router: Router) { }

  ngOnInit() {
    this.totalBudget$.subscribe(value => this.budget=value);
    this.allCategories$.subscribe(values => this.allCategories=values);
  }

 
  onUpdate(){
   // this.ngRedux.dispatch({type: UPDATE_BUDGET,totalBudget:this.budget});
   // this.localStorageService.storeOnLocalStorage(this.totalBudget,"total_budget");
  }
  addCategory(){
    let payload:ICategory={name:this.category,isActive:true,id:0,description:this.category}
    this._store.dispatch(new AddCategory(payload))
  
   // this.ngRedux.dispatch({type: ADD_CATEGORY,category:category});
   // this.localStorageService.storeOnLocalStorage(categoryObj,"all_categories");
  }
  
  // onSubmit(){
  //   console.log(this.settingsForm);
  //   const loginUserName=this.settingsForm.value.username;
  //   var loginDetails=this.localStorageService.getLoginDetailsFromLocalStorage(loginUserName);
  //   console.log(loginDetails);
  //   if(this.loginForm.value.password==loginDetails.password){
  //    alert('login successfully');
  //    this.router.navigate(['/user-details'],{queryParams: {username:loginUserName }});
  // }
  
  // (submit)="onSubmit()"
}
