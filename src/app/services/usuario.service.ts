import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usu = [];
  tel = [];
  calle: any; numero: any; colonia: any; cp: any;
  
  constructor() { }

  getUsuario(){
    return this.usu;
  }

  addDatoN(nombre){
    this.usu.push(nombre);
  }

  addDatoT(telefono){
    this.tel.push(telefono);
  }

  addDatoD(cal, num, col, cpe){
    this.calle = cal;
    this.numero = num;
    this.colonia = col;
    this.cp = cpe;
  }

}
