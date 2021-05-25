import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Banner } from '../model/banner.model';
import { Category } from '../model/category.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getBanners(): Observable<Banner> | Observable<any> {
    return this.http.get(environment.host + environment.api.bannerPath);
  }

  getCategories(): Observable<Category> | Observable<any> {
    return this.http.get(environment.host + environment.api.categoryPath);
  }

  getProducts(): Observable<Product> | Observable<any> {
    return this.http.get(environment.host + environment.api.productPath);
  }
}
