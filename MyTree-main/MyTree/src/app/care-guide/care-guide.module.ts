import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CareGuidePageRoutingModule } from './care-guide-routing.module';

import { CareGuidePage } from './care-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CareGuidePageRoutingModule
  ],
  declarations: [CareGuidePage]
})
export class CareGuidePageModule {}
