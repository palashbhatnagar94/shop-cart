import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User;
  userStorage: Map<string, User>[] = [];

  regPat = '[a-zA-Z0-9]{6}';

  constructor() { 
    this.user = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      rpass: ''
    }
  }

  ngOnInit(): void {
  }

  register(form: any) {
    localStorage.setItem(this.user.email, this.user.password);
    alert('Succesfully Registered')
  }
}
