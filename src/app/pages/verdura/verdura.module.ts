import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerduraPageRoutingModule } from './verdura-routing.module';

import { VerduraPage } from './verdura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerduraPageRoutingModule
  ],
  declarations: [VerduraPage]
})
export class VerduraPageModule {}
