import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeStatusPage } from './tree-status.page';

const routes: Routes = [
  {
    path: '',
    component: TreeStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreeStatusPageRoutingModule {}
