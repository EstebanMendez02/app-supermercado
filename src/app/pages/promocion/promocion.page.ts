import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { CarritoService } from 'src/app/services/carrito.service';
import { PromocionService } from 'src/app/services/promocion.service';

@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.page.html',
  styleUrls: ['./promocion.page.scss'],
})
export class PromocionPage implements OnInit {

  promociones: MenuItem[] = [];

  carritos: MenuItem[] = [];

  product: any;

  constructor(private promocionService: PromocionService, public alertController: AlertController, public toastController: ToastController, private cartService: CarritoService) { }

  ngOnInit() {
    this.promocionService
    .getTopHeadLinesPR().subscribe(resp => {
      console.log('promocion', resp);
      this.promociones.push(...resp.menuItems);
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
                  console.log ('promociones', this.promociones[i]);
                  this.presentToast();
                  this.carritos.push(this.promociones[i]);
                  console.log ('carritos', this.carritos);
                  //carraje
                  this.product = this.promociones[i].title;
                  this.cartService.addProduct(this.product);
                  console.log('product: ', this.product);
                  console.log('carr', this.cartService.cart);
                  }
                }]
    });
    await alert.present();
  }

}
