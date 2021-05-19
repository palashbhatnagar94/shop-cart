import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(public route: Router) { }

  loginVerify(email: string, pass: string): string {
    if(localStorage.getItem(email) === pass) {
      this.isLoggedIn.next(true);
      this.route.navigate(['/products']);
      return '';
    } else {
      this.isLoggedIn.next(false);
      return 'Invalid Credentials';
    }
  }
}
