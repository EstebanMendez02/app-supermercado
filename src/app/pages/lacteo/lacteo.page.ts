import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { LacteoService } from 'src/app/services/lacteo.service';

@Component({
  selector: 'app-lacteo',
  templateUrl: './lacteo.page.html',
  styleUrls: ['./lacteo.page.scss'],
})
export class LacteoPage implements OnInit {

  lacteos: MenuItem[] = [];

  constructor(private lacteoService: LacteoService, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
    this.lacteoService
    .getTopHeadLinesL().subscribe(resp => {
      console.log('lacteos', resp);
      this.lacteos.push(...resp.menuItems);
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
