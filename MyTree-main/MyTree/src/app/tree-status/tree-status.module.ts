import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreeStatusPageRoutingModule } from './tree-status-routing.module';

import { TreeStatusPage } from './tree-status.page';
import { TreeStatusPipe } from './tree-status-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreeStatusPageRoutingModule
  ],
  declarations: [TreeStatusPage, TreeStatusPipe]
})
export class TreeStatusPageModule {}
