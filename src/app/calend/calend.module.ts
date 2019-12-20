import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendPageRoutingModule } from './calend-routing.module';

import { CalendPage } from './calend.page';
import {NgCalendarModule} from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendPageRoutingModule,
    NgCalendarModule,

  ],
  declarations: [CalendPage]
})
export class CalendPageModule {}
