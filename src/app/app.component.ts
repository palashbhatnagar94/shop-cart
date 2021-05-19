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

  constructor(private cartService: CartService, public auth: AuthService,
              public route: Router ) {}

  ngOnInit() {
    this.cartService.showCart.subscribe(val => {
      if(this.userLoggedIn) {
        this.showCart = val;
      } else {
        this.route.navigate(['/login']);
      }
    });

    this.auth.isLoggedIn.subscribe(val => {
      this.userLoggedIn = val;
    });
  }

  
}
