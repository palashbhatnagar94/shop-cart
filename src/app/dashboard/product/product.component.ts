import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { Category } from 'src/app/shared/model/category.model';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any;

  categories: any;

  @Input() selectedCategoryId: string = '';

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
