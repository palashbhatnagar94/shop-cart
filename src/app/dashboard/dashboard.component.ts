import { Component, HostListener, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
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

  selectedCat: string = '';

  cartData:Product[] = [];

  windowWidth = 0;

  @HostListener('window:resize', ['$event'])
    onResize(event: { target: {
      window: Window
    } }) {
      this.windowWidth = event ? event.target.window.outerWidth : 0;
  }

  constructor(public ps: ProductService, public cartService: CartService) { }

  ngOnInit(): void {

    this.windowWidth = window.outerWidth;

    this.ps.getProducts().subscribe((res: Product[]) => {
      this.products = res;
    });

    this.ps.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    });

    this.cartService.cart.subscribe((res: Product[]) => {
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
