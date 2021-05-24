import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

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
    this.cartService.showCart.subscribe(val => {
      this.showCartFlag = val;
    })

    this.auth.isLoggedIn.subscribe(val => {
      this.userLoggedIn = val;
    });

    this.cartService.cart.subscribe(val => {
      this.totalItem = 0;
      val.forEach(item => {
        this.totalItem += (item.quantity ?? 0)
      });
    })
  }

  showCart() {
    this.cartService.showCart.next(!this.showCartFlag);
  }

  logout() {
    this.auth.isLoggedIn.next(false);
  }

  menuToggle() {
    this.showMenu = !this.showMenu;
    console.log('this.showMenu', this.showMenu);
  }

}
