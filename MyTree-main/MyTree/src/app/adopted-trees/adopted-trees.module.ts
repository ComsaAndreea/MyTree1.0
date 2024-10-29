import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoptedTreesPageRoutingModule } from './adopted-trees-routing.module';

import { AdoptedTreesPage } from './adopted-trees.page';
import { TreeAdoptedFilterPipe } from './tree-adopted-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoptedTreesPageRoutingModule
  ],
  declarations: [AdoptedTreesPage, TreeAdoptedFilterPipe]
})
export class AdoptedTreesPageModule {}
