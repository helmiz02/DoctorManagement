import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePPage } from './update-p.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePPageRoutingModule {}
