import { TestBed } from '@angular/core/testing';

import { Product } from '../model/product.model';
import { CartService } from './cart.service';

const mockCartData: Product[] = [
  
  {
    "name": "Fresho Kiwi - Green, 3 pcs",
    "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
    "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    "price": 87,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-kiwi-3",
    "id": "5b6c6a7f01a7c38429530883",
    "quantity": 2
  },
  {
    "name": "Apple - Washington, Regular, 4 pcs",
    "imageURL": "/static/images/products/fruit-n-veg/apple.jpg",
    "description": "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    "price": 187,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-apple-4",
    "id": "5b6c6aeb01a7c38429530884",
    "quantity": 1
  }
]

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Adding 1st product in cart', () => {
    const item = mockCartData[0];
    service.cart.next([])
    service.addToCart(item);
    expect(service.cart.getValue().length).toEqual(1);
  });

  it('Adding already existing product in cart', () => {
    const item = mockCartData[0];
    service.cart.next(mockCartData)
    service.addToCart(item);
    expect(service.cart.getValue().length).toEqual(2);
  });

  it('Adding non-existing product in cart', () => {
    const item = {
      "name": "Fresho Pomegrante Peeled, 500 gm ",
      "imageURL": "/static/images/products/fruit-n-veg/pomegrante.jpg",
      "description": "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.",
      "price": 88,
      "stock": 50,
      "category": "5b6899953d1a866534f516e2",
      "sku": "fnw-pomegranate-500",
      "id": "5b6c6b7001a7c38429530885"
    };
    service.cart.next(mockCartData)
    const resp = service.addToCart(item);
    expect(service.cart.getValue().length).toEqual(3);
  });

  it('Removing product having quantity = 1', () => {
    const item = mockCartData[1];
    service.cart.next(mockCartData)
    const resp = service.removeItem(item);
    expect(service.cart.getValue().length).toEqual(mockCartData.length - 1);
  });

  it('Removing product having quantity > 1', () => {
    const item = mockCartData[0];
    service.cart.next(mockCartData)
    const resp = service.removeItem(item);
    expect(service.cart.getValue().length).toEqual(mockCartData.length);
  });


});
