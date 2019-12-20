import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePPageRoutingModule } from './update-p-routing.module';

import { UpdatePPage } from './update-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatePPage]
})
export class UpdatePPageModule {}
