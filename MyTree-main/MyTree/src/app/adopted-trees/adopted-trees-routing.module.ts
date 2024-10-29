import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptedTreesPage } from './adopted-trees.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptedTreesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptedTreesPageRoutingModule {}
