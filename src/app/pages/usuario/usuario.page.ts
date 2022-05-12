import { Component, OnInit } from '@angular/core';
import { RegistroPage } from '../registro/registro.page';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  usuario={
    nombre: '',
    telefono: '',
    email: '',
    contrasena: '',
    repetircontrasena: ''
  };
  constructor() { }

  ngOnInit() {
  }

}
