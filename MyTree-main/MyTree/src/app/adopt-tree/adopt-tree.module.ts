import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoptTreePageRoutingModule } from './adopt-tree-routing.module';
import { TreeFilterPipe } from './tree-filter-pipe';

import { AdoptTreePage } from './adopt-tree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptTreePageRoutingModule
  ],
  declarations: [AdoptTreePage, TreeFilterPipe]
})
export class AdoptTreePageModule {}
