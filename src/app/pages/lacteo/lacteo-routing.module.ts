import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LacteoPage } from './lacteo.page';

const routes: Routes = [
  {
    path: '',
    component: LacteoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LacteoPageRoutingModule {}
