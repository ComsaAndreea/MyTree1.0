import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeStoryPage } from './tree-story.page';

const routes: Routes = [
  {
    path: '',
    component: TreeStoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreeStoryPageRoutingModule {}
