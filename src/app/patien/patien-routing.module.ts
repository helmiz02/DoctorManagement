import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatienPage } from './patien.page';

const routes: Routes = [
  {
    path: '',
    component: PatienPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatienPageRoutingModule {}
