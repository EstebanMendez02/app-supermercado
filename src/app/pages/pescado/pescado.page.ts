import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { PescadoService } from 'src/app/services/pescado.service';

@Component({
  selector: 'app-pescado',
  templateUrl: './pescado.page.html',
  styleUrls: ['./pescado.page.scss'],
})
export class PescadoPage implements OnInit {

  pescados: MenuItem[] = [];

  constructor(private pescadoService: PescadoService, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
    this.pescadoService.getTopHeadLinesP().subscribe(resp => {
      console.log('pescados', resp); 
      this.pescados.push(...resp.menuItems);
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
