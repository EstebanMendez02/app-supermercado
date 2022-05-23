import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { FrutaService } from 'src/app/services/fruta.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.page.html',
  styleUrls: ['./fruta.page.scss'],
})
export class FrutaPage implements OnInit {

  frutas: MenuItem[] = [];
  constructor(private frutaService: FrutaService, public toastController: ToastController, public alertController: AlertController) { }

  ngOnInit() {
    this.frutaService
    .getTopHeadLinesF().subscribe(resp => {
      console.log('frutas', resp);
      this.frutas.push(...resp.menuItems);
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
