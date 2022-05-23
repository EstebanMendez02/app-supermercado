import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolloPageRoutingModule } from './pollo-routing.module';

import { PolloPage } from './pollo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolloPageRoutingModule
  ],
  declarations: [PolloPage]
})
export class PolloPageModule {}
