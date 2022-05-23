import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { VerduraService } from 'src/app/services/verdura.service';

@Component({
  selector: 'app-verdura',
  templateUrl: './verdura.page.html',
  styleUrls: ['./verdura.page.scss'],
})
export class VerduraPage implements OnInit {

  verduras: MenuItem[] = [];

  constructor( private verduraService:VerduraService, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
    this.verduraService
    .getTopHeadLinesV().subscribe(resp => {
      console.log('verduras', resp);
      this.verduras.push(...resp.menuItems);
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
