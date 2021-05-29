import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { Category } from 'src/app/shared/model/category.model';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-category-navigation',
  templateUrl: './category-navigation.component.html',
  styleUrls: ['./category-navigation.component.scss']
})
export class CategoryNavigationComponent implements OnChanges, OnInit {

  categories: Category[] = [];

  @Input() selectedCategoryId: string = '';

  selectedCat: string = '';

  cartData:Product[] = [];

  constructor(public ps: ProductService, public cartService: CartService,
    private route: Router) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['selectedCategoryId'].currentValue !== changes['selectedCategoryId'].previousValue) {
      this.selectedCat = this.categories.find(cat => cat.id === this.selectedCategoryId)?.name ?? '';

      console.log('this.selectedCat', this.selectedCat);
    }
  }

  ngOnInit(): void {

    this.ps.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    });

    this.cartService.cart.subscribe((res: Product[]) => {
      this.cartData = res;
    })
  }

  onChangeCategory(i: number) {
    this.route.navigate(['/products', {id : this.categories[i].id}])
  }

}
