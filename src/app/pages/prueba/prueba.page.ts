import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  constructor( private comidaService: ComidaService) { }

  comidas: MenuItem[] = [];

  ngOnInit() {
    this.comidaService.getTopHeadLines().subscribe(resp => {
      console.log('comidas', resp);
      this.comidas.push(...resp.menuItems)
    });
  }

}
