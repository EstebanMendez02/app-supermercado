import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RegistroPage } from '../registro/registro.page';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  nombre: any;
  telefono: any;
  calle: any; numero: any; colonia: any; cp: any;
  constructor(private usuarioService: UsuarioService) { 

  }

  ngOnInit() {
    this.nombre = this.usuarioService.usu;
    this.telefono = this.usuarioService.tel;
    this.calle = this.usuarioService.calle;
    this.numero = this.usuarioService.numero;
    this.colonia = this.usuarioService.colonia;
    this.cp = this.usuarioService.cp;
    console.log(this.nombre, this.telefono);
  }



}
