import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  selectedItems = [];
  constructor(private cartService: CarritoService, private router: Router) { }


  ngOnInit() {
    this.selectedItems = this.cartService.cart;
  }

  borrarCarrito(){
    this.cartService.removeCart();
    this.router.navigate(["/inicio"]);
    this.cartService.getCart();
  }


}
