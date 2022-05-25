import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-rastreo',
  templateUrl: './rastreo.page.html',
  styleUrls: ['./rastreo.page.scss'],
})
export class RastreoPage implements OnInit {

  porcentaje = 0.8;
  selectedItems = [];

  constructor(private cartService: CarritoService) { }

  ngOnInit() {
    this.selectedItems = this.cartService.cart;
  }

}
