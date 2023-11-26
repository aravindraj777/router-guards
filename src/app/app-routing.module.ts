import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/login'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
  canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
