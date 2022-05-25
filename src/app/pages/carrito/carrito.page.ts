import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  selectedItems = [];
  constructor(public toastController: ToastController, public alertController: AlertController, private cartService: CarritoService, private router: Router) { }


  ngOnInit() {
    this.selectedItems = this.cartService.cart;
  }

  borrarCarrito(){
    this.cartService.removeCart();
    this.router.navigate(["/secciones"]);
    this.cartService.getCart();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Estás apunto de borrar tu carrito!',
      subHeader: '¿Estás seguro?',
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
  async presentToast() {
    const toast = await this.toastController.create({
      message: '¡Carrito eliminado!',
      duration: 2000
    });
    this.borrarCarrito();
    toast.present();
  }
}
