import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { PolloService } from 'src/app/services/pollo.service';

@Component({
  selector: 'app-pollo',
  templateUrl: './pollo.page.html',
  styleUrls: ['./pollo.page.scss'],
})
export class PolloPage implements OnInit {

  pollos: MenuItem[] = [];

  constructor(private polloService: PolloService, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
    this.polloService
    .getTopHeadLinesPO().subscribe(resp => {
      console.log('pollos', resp);
      this.pollos.push(...resp.menuItems);
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: '¡Agregado Exitosamente!',
      duration: 2000
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      subHeader: 'Confirma',
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
