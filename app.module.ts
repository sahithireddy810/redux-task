import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { LeftComponent } from './left/left.component';
import {StoreModule} from "@ngrx/store"
import {rootReducer} from "./store/reducers/app.reducer"
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component'
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
