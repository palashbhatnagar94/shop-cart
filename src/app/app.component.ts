import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { CartService } from './shared/services/cart.service';

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
  
  windowWidth = 0;

  @HostListener('window:resize', ['$event'])
    onResize(event: { target: {
      window: Window
    } }) {
      this.windowWidth = event ? event.target.window.outerWidth : 0;
  }

  constructor(private cartService: CartService, public auth: AuthService,
              public route: Router ) {}

  ngOnInit() {
    this.windowWidth = window.outerWidth;
    this.cartService.canShowCart.subscribe((val: boolean) => {
      if(this.userLoggedIn) {
        this.showCart = val;
      } else {
        if(this.i===0) {
          this.route.navigate(['/home']);
          this.i++;
        } else {
          this.route.navigate(['/welcome']);
        }
      }
    });

    this.auth.isLoggedIn.subscribe((val: boolean) => {
      this.userLoggedIn = val;
    });
  }

  
}
