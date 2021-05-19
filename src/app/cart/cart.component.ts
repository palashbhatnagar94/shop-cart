import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  cartData: Product[] = [];

  amountPayable = 0.0;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe(res => {
      this.cartData = res;
      this.amountPayable = 0.0;
      this.cartData.forEach(item => {
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
    this.cartService.showCart.next(false);
  }

  checkout() {
    alert('Order Success!!!');
    this.cartService.showCart.next(false);
    this.cartService.cart.next([]);
  }

}
