import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent} from './add-expense/add-expense.component';
import { EditExpenseComponent} from './edit-expense/edit-expense.component';
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Settings', component: SettingsComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'addExpense', component: AddExpenseComponent },
  { path: 'editExpense', component: EditExpenseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
