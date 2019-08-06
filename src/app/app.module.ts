import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { LeftComponent } from './left/left.component';
import {StoreModule,ActionReducerMap, ActionReducer, MetaReducer} from "@ngrx/store"
import {EffectsModule} from "@ngrx/effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component'
import { localStorageSync } from 'ngrx-store-localstorage';
import {rootReducer} from "./store/reducers/app.reducer"
import {CategoryEffects} from "./store/effects/category.effects"
import {ExpenseEffects} from "./store/effects/expense.effects"
// import {INITIAL_CATEGORY_STATE,ICategoryState} from "./store/state/category.state";

// export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
//   return localStorageSync({keys: [{"expenses": [[]] } ]})(reducer);
// }

// const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    ProfileComponent,
    LeftComponent,
    AddExpenseComponent,
    EditExpenseComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
   
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([CategoryEffects,ExpenseEffects]),
    StoreRouterConnectingModule.forRoot({stateKey:'router'}),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
//   constructor (ngRedux: NgRedux<IAppState>) {
//     ngRedux.configureStore(rootReducer, INITIAL_STATE);
// }
 }
