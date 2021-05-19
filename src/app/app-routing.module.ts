import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { 
    path: 'home',
    component: HomeComponent,
  },
  { 
    path: 'products',
    component: DashboardComponent,
  },
  { 
    path: 'cart',
    component: CartComponent,
  },
  { 
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
