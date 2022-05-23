import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { CarneService } from 'src/app/services/carne.service';

@Component({
  selector: 'app-carne',
  templateUrl: './carne.page.html',
  styleUrls: ['./carne.page.scss'],
})
export class CarnePage implements OnInit {

  carnes: MenuItem[] = [];

  constructor(private carneService: CarneService, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
    this.carneService
    .getTopHeadLinesC().subscribe(resp => {
      console.log('carnes', resp);
      this.carnes.push(...resp.menuItems);
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
