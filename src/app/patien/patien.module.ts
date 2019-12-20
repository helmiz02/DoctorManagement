import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatienPageRoutingModule } from './patien-routing.module';

import { PatienPage } from './patien.page';
import {LoginPageRoutingModule} from '../login/login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatienPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PatienPage]
})
export class PatienPageModule {}
