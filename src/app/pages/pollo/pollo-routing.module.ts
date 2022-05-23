import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolloPage } from './pollo.page';

const routes: Routes = [
  {
    path: '',
    component: PolloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolloPageRoutingModule {}
