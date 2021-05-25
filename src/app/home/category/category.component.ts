import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  
  categories: Category[] = [];

  constructor(public ps: ProductService,) { }

  ngOnInit() {
    this.ps.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    });
  }

}
