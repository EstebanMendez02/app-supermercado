import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { CarritoService } from 'src/app/services/carrito.service';
import { PolloService } from 'src/app/services/pollo.service';

@Component({
  selector: 'app-pollo',
  templateUrl: './pollo.page.html',
  styleUrls: ['./pollo.page.scss'],
})
export class PolloPage implements OnInit {

  pollos: MenuItem[] = [];

  carritos: MenuItem[] = [];

  product: any;

  constructor(private cartService: CarritoService, private polloService: PolloService, public alertController: AlertController, public toastController: ToastController) { }

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

  async presentAlert(i) {
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
                  console.log ('pollos', this.pollos[i]);
                  this.presentToast();
                  this.carritos.push(this.pollos[i]);
                  console.log ('carritos', this.carritos);
                   //carraje
                   this.product = this.pollos[i].title;
                   this.cartService.addProduct(this.product);
                   console.log('product: ', this.product);
                   console.log('carr', this.cartService.cart);
                  }
                }]
    });
    await alert.present();
  }
}
