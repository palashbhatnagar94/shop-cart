import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {  Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  showCart = new BehaviorSubject<boolean>(false);

  cart = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) { }

  addToCart(item: Product) {
    let updatedCart = this.cart.value;
    if(this.cart.value.length === 0) {
      item.quantity = 1;
      updatedCart.push(item);
    } else {
      const id = updatedCart.findIndex(p => p.id === item.id)
      if(id === -1) {
        item.quantity = 1;
        updatedCart.push(item);
      } else {
        const val = updatedCart[id].quantity ?? 0;
        updatedCart[id].quantity = val + 1;
      }
    }
    this.cart.next(updatedCart);
    return of({
      "response": "Success",
      "responseMessage": "Product added to cart successfully"
    })
  }

  removeItem(prod: Product) {
    if(prod.quantity && prod.quantity > 0) {
      prod.quantity--;
    }

    let updatedCart = this.cart.value.map(item => {
      if(item.id === prod.id) {
        item.quantity = prod.quantity
      }
      return item;
    });

    this.cart.next(updatedCart);
  }
}
