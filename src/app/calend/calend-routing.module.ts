import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendPage } from './calend.page';

const routes: Routes = [
  {
    path: '',
    component: CalendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendPageRoutingModule {}
