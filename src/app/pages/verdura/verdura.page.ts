import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { CarritoService } from 'src/app/services/carrito.service';
import { VerduraService } from 'src/app/services/verdura.service';

@Component({
  selector: 'app-verdura',
  templateUrl: './verdura.page.html',
  styleUrls: ['./verdura.page.scss'],
})
export class VerduraPage implements OnInit {

  verduras: MenuItem[] = [];

  carritos: MenuItem[] = [];

  product: any;

  constructor(private cartService: CarritoService, private verduraService:VerduraService, public alertController: AlertController, public toastController: ToastController) { }

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
                  console.log ('verduras', this.verduras[i]);
                  this.presentToast();
                  this.carritos.push(this.verduras[i]);
                  console.log ('carritos', this.carritos);
                   //carraje
                   this.product = this.verduras[i].title;
                   this.cartService.addProduct(this.product);
                   console.log('product: ', this.product);
                   console.log('carr', this.cartService.cart);
                  }
                }]
    });
    await alert.present();
  }

}
