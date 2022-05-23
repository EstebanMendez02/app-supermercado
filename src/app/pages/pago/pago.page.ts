import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

tarjeta={
  titular: '',
  numeroT: '',
  caducidad: '',
  cvv: ''
};

constructor(public alertController: AlertController, public toastController: ToastController, private router: Router) { }

async presentToast() {
  const toast = await this.toastController.create({
    message: '¡Compra exitosa!',
    duration: 2000
  });
  toast.present();
  this.router.navigateByUrl('/rastreo');
}

ngOnInit() {
}

onSubmitTemplate(){
  console.log('Form Submit');
}

async presentAlert() {
  const alert = await this.alertController.create({
    header: '¡Ya casi!',
    subHeader: 'Confirmación de pedido',
    message: 'Favor de confirmar el pedido.',
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
