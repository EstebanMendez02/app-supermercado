import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { CarritoService } from 'src/app/services/carrito.service';
import { PescadoService } from 'src/app/services/pescado.service';

@Component({
  selector: 'app-pescado',
  templateUrl: './pescado.page.html',
  styleUrls: ['./pescado.page.scss'],
})
export class PescadoPage implements OnInit {

  pescados: MenuItem[] = [];

  carritos: MenuItem[] = [];

  product: any;

  constructor(private cartService: CarritoService, private pescadoService: PescadoService, public alertController: AlertController, public toastController: ToastController) { }

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
                  console.log ('pescados', this.pescados[i]);
                  this.presentToast();
                  this.carritos.push(this.pescados[i]);
                  console.log ('carritos', this.carritos);
                   //carraje
                   this.product = this.pescados[i].title;
                   this.cartService.addProduct(this.product);
                   console.log('product: ', this.product);
                   console.log('carr', this.cartService.cart);
                  }
                }]
    });
    await alert.present();
  }

}
