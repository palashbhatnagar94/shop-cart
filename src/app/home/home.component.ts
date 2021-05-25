import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Banner } from '../model/banner.model';
import { Category } from '../model/category.model';

import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners: Banner[] = [];


  constructor(public ps: ProductService,
    private config: NgbCarouselConfig) { }

  ngOnInit(): void {

    this.config.interval = 5000;
    this.ps.getBanners().subscribe((res: Banner[]) => {
      this.banners = res;
    });

    
  }

}
