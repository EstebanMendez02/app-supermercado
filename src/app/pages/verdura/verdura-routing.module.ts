import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerduraPage } from './verdura.page';

const routes: Routes = [
  {
    path: '',
    component: VerduraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerduraPageRoutingModule {}
