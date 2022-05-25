import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import {Router} from "@angular/router";
import { UsuarioService } from 'src/app/services/usuario.service';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario={
      nombre: '',
      telefono: '',
      email: '',
      contrasena: '',
      repetircontrasena: ''
  };
  direccion={
    calle: '',
    numeroD: '',  
    colonia: '',
    cp: ''
  };

  nombre: any;
  telefono: any;
  calle: any; numero: any; colonia: any; cp: any;

  constructor(private usuarioService: UsuarioService, public alertController: AlertController, public toastController: ToastController, private router: Router) { 

  }

 

  async presentToast() {
    const toast = await this.toastController.create({
      message: '¡Registro Exitoso!',
      duration: 2000
    });
    toast.present();
    this.router.navigateByUrl('/secciones');
  }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log('Form Submit');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Ya casi está tu registro!',
      subHeader: 'Confirma tu registro',
      message: 'Favor de confirmar el registro.',
      buttons: [{text: 'Cancelar',
                handler: (blur)=> {
                  console.log ('Se ha presionado el Botón CANCELAR');
                  }
                },
                {text: 'Confirmar',
                handler: (blur)=> {
                  console.log ('Se ha presionado el Botón CONFIRMAR');
                  this.presentToast();
                  //
                  this.nombre = this.usuario.nombre;
                  this.telefono = this.usuario.telefono;
                  this.calle = this.direccion.calle;
                  this.numero = this.direccion.numeroD;
                  this.colonia = this.direccion.colonia;
                  this.cp = this.direccion.cp;
                  this.usuarioService.addDatoN(this.nombre);
                  this.usuarioService.addDatoT(this.telefono);
                  this.usuarioService.addDatoD(this.calle, this.numero, this.colonia, this.cp);
                  }
                }]
    });
    await alert.present();
  }

  
}
