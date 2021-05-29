import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { ProductService } from '../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  categoryId: string = '';

  constructor(public ps: ProductService, public cartService: CartService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id') ?? '';
    })
  }
}
