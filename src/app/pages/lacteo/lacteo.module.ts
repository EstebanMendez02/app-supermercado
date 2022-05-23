import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LacteoPageRoutingModule } from './lacteo-routing.module';

import { LacteoPage } from './lacteo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LacteoPageRoutingModule
  ],
  declarations: [LacteoPage]
})
export class LacteoPageModule {}
