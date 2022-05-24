import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { CarritoService } from 'src/app/services/carrito.service';
import { FrutaService } from 'src/app/services/fruta.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.page.html',
  styleUrls: ['./fruta.page.scss'],
})
export class FrutaPage implements OnInit {

  frutas: MenuItem[] = [];

  carritos: MenuItem[] = [];

  product: any;

  constructor(private cartService: CarritoService, private frutaService: FrutaService, public toastController: ToastController, public alertController: AlertController) { }

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
                  console.log ('carnes', this.frutas[i]);
                  this.presentToast();
                  this.carritos.push(this.frutas[i]);
                  console.log ('carritos', this.carritos);
                   //carraje
                   this.product = this.frutas[i].title;
                   this.cartService.addProduct(this.product);
                   console.log('product: ', this.product);
                   console.log('carr', this.cartService.cart);
                  }
                }]
    });
    await alert.present();
  }

}
