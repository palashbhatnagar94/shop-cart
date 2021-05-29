import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingRoutingModule } from './welcome-routing-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WelcomeRoutingRoutingModule
  ],
  // providers: [AuthService],
  // bootstrap:[WelcomeComponent]
})
export class WelcomeModule { }
