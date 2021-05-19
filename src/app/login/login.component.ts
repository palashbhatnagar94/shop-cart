import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  bannerMsg: string = '';

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.bannerMsg = this.auth.loginVerify(this.email, this.password);
    if(this.bannerMsg) {
      alert(this.bannerMsg);
    }
  }

}
