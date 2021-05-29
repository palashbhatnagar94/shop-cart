import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../shared/model/product.model';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cartData: Product[] = [];

  amountPayable = 0.0;

  totalItem = 0;

  windowWidth = 0;
  
  @HostListener('window:resize', ['$event'])
    onResize(event: { target: {
      window: Window
    } }) {
      this.windowWidth = event ? event.target.window.outerWidth : 0;
  }

  constructor(public cartService: CartService,
    public route: Router) { }

  ngOnInit() {

    this.windowWidth = window.outerWidth;

    this.cartService.cart.subscribe((res: Product[]) => {
      this.cartData = res;
      this.amountPayable = 0.0;
      this.totalItem = 0;
      this.cartData.forEach(item => {
        this.totalItem += (item.quantity ?? 0);
        this.amountPayable += (item.price * (item.quantity ?? 0));
      })
    })
  }

  addItem(product: Product) {
    if (product.quantity === product.stock) {
      alert('Product out of stock');
      return;
    }
    this.cartService.addToCart(product).subscribe(res => {
      console.log(res);
    });
  }

  removeItem(product: Product) {
    if (product.quantity === 0) {
      return;
    }
    this.cartService.removeItem(product);
  }

  close() {
    this.cartService.canShowCart.next(false);
  }

  startShop() {
    this.cartService.canShowCart.next(false);
    this.route.navigate(['/products']);
  }

  checkout() {
    alert('Order Success!!!');
    this.cartService.canShowCart.next(false);
    this.cartService.cart.next([]);
  }

}
