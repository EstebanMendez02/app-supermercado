import { Component, OnInit } from '@angular/core';
import { AlertController, IonNavLink } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import {Router} from "@angular/router";




@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario={
      nombre: '',
      email: '',
      contrasena: '',
      repetircontrasena: ''
  };

  constructor(public alertController: AlertController, public toastController: ToastController, private router: Router) { }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: '¡Registro Exitoso!',
      duration: 2000
    });
    toast.present();
    this.router.navigateByUrl('/inicio');
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
                  }
                }]
    });
    await alert.present();
  }

  
}
