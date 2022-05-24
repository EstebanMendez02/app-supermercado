import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { CarneService } from 'src/app/services/carne.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carne',
  templateUrl: './carne.page.html',
  styleUrls: ['./carne.page.scss'],
})
export class CarnePage implements OnInit {

  carnes: MenuItem[] = [];

  carritos: MenuItem[] = [];

  product: any;
  constructor(private carneService: CarneService, public alertController: AlertController, public toastController: ToastController, private cartService: CarritoService) { }

  ngOnInit() {
    this.carneService
    .getTopHeadLinesC().subscribe(resp => {
      console.log('carnes', resp);
      this.carnes.push(...resp.menuItems);
    });

  }

  async quitarProducto(o){
    //this.carritos.reduce(this.carritos[o]);
    //this.carritos.
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
                  console.log ('carnes', this.carnes[i]);
                  this.presentToast();
                  this.carritos.push(this.carnes[i]);
                  console.log ('carritos', this.carritos);
                  //carraje
                  this.product = this.carnes[i].title;
                  this.cartService.addProduct(this.product);
                  console.log('product: ', this.product);
                  console.log('carr', this.cartService.cart);
                  }
                }]
    });
    await alert.present();
  }

}
