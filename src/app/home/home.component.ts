import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Banner } from '../shared/model/banner.model';
import { ProductService } from '../shared/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners: Banner[] = [];

  constructor(public ps: ProductService,
    private config: NgbCarouselConfig) { }

  ngOnInit() {

    this.config.interval = 5000;
    this.ps.getBanners().subscribe((res: Banner[]) => {
      this.banners = res;
    });
    
  }

}
