import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getBanners() {
    return this.http.get('http://localhost:5000/banners');
  }

  getCategories() {
    return this.http.get('http://localhost:5000/categories');
  }

  getProducts() {
    return this.http.get('http://localhost:5000/products');
  }
}
