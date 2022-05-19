import { Component, OnInit } from '@angular/core';
import { RegistroPage } from '../registro/registro.page';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  nombre='';
  constructor() { 
    //this.nombre = navParams.get('usuario.nombre');
  }

  ngOnInit() {
  }

}
