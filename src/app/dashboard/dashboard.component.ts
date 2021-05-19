import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products: any;

  categories: any;

  selectedCategoryId: string = '';

  cartData:Product[] = []

  constructor(public ps: ProductService, public cartService: CartService) { }

  ngOnInit(): void {
    this.ps.getProducts().subscribe(res => {
      this.products = res;
    });

    this.ps.getCategories().subscribe(res => {
      this.categories = res;
    });

    this.cartService.cart.subscribe(res => {
      this.cartData = res;
    })
  }

  addToCart(prod: Product) {
    this.cartService.addToCart(prod).subscribe(res => {
      alert(res.responseMessage);
    });
  }

  onChangeCategory(i: number) {
    console.log('category', this.categories[i]);
    this.selectedCategoryId = this.categories[i]?.id;
  }

}
