import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../shared/model/product.model';
import { AuthService } from '../shared/services/auth.service';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showCartFlag = false;
  userLoggedIn = false;
  showMenu = false;
  totalItem = 0;
  windowWidth = 0;

  @HostListener('window:resize', ['$event'])
    onResize(event: { target: {
      window: Window
    } }) {
      this.windowWidth = event ? event.target.window.outerWidth : 0;
  }

  constructor(private cartService: CartService, public auth: AuthService,
    public route: Router) { }

  ngOnInit(): void {
    this.windowWidth = window.outerWidth;
    
    this.cartService.canShowCart.subscribe((canShowCart: boolean) => {
      this.showCartFlag = canShowCart;
    })

    this.auth.isLoggedIn.subscribe((loggedIn: boolean) => {
      this.userLoggedIn = loggedIn;
    });

    this.cartService.cart.subscribe((selectedProducts: Product[]) => {
      this.totalItem = 0;
      selectedProducts.forEach(item => {
        this.totalItem += (item.quantity ?? 0)
      });
    })
  }

  showCart() {
    this.cartService.canShowCart.next(!this.showCartFlag);
    // this.route.navigate(['/cart']);
  }

  logout() {
    this.auth.isLoggedIn.next(false);
  }

  menuToggle() {
    this.showMenu = !this.showMenu;
    console.log('this.showMenu', this.showMenu);
  }

}
