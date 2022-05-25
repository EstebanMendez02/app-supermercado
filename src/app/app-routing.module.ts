import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'prueba',
    loadChildren: () => import('./pages/prueba/prueba.module').then( m => m.PruebaPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'secciones',
    loadChildren: () => import('./pages/secciones/secciones.module').then( m => m.SeccionesPageModule)
  },
  {
    path: 'rastreo',
    loadChildren: () => import('./pages/rastreo/rastreo.module').then( m => m.RastreoPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./pages/pago/pago.module').then( m => m.PagoPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'carne',
    loadChildren: () => import('./pages/carne/carne.module').then( m => m.CarnePageModule)
  },
  {
    path: 'pescado',
    loadChildren: () => import('./pages/pescado/pescado.module').then( m => m.PescadoPageModule)
  },
  {
    path: 'pollo',
    loadChildren: () => import('./pages/pollo/pollo.module').then( m => m.PolloPageModule)
  },
  {
    path: 'verdura',
    loadChildren: () => import('./pages/verdura/verdura.module').then( m => m.VerduraPageModule)
  },
  {
    path: 'fruta',
    loadChildren: () => import('./pages/fruta/fruta.module').then( m => m.FrutaPageModule)
  },
  {
    path: 'lacteo',
    loadChildren: () => import('./pages/lacteo/lacteo.module').then( m => m.LacteoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },  {
    path: 'promocion',
    loadChildren: () => import('./pages/promocion/promocion.module').then( m => m.PromocionPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
