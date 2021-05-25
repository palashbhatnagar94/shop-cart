import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';

  showCart = false;
  userLoggedIn = false;
  i = 0;

  constructor(private cartService: CartService, public auth: AuthService,
              public route: Router ) {}

  ngOnInit() {
    this.cartService.canShowCart .subscribe((val: boolean) => {
      if(this.userLoggedIn) {
        this.showCart = val;
      } else {
        if(this.i===0) {
          this.route.navigate(['/home']);
          this.i++;
        } else {
          this.route.navigate(['/login']);
        }
      }
    });

    this.auth.isLoggedIn.subscribe((val: boolean) => {
      this.userLoggedIn = val;
    });
  }

  
}
