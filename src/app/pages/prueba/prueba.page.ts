import { Component, OnInit } from '@angular/core';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  constructor( private comidaService: ComidaService) { }

  ngOnInit() {
    this.comidaService.getTopHeadLines().subscribe(resp => {console.log('comidas', resp);});
  }

}
