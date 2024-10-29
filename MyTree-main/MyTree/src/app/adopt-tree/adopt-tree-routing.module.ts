import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptTreePage } from './adopt-tree.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptTreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptTreePageRoutingModule {}
