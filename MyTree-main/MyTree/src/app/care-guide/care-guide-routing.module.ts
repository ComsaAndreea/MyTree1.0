import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareGuidePage } from './care-guide.page';

const routes: Routes = [
  {
    path: '',
    component: CareGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareGuidePageRoutingModule {}
