import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners: any;

  categories: any;

  constructor(public ps: ProductService,
    private config: NgbCarouselConfig) { }

  ngOnInit(): void {

    this.config.interval = 5000;
    this.ps.getBanners().subscribe(res => {
      this.banners = res;
    });

    this.ps.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

}
