import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  cart = [];
  constructor() { }

  getCart(){
    return this.cart;
  }

  addProduct(product){
    this.cart.push(product);
  }

  removeCart(){
    this.cart = [];
  }
}
