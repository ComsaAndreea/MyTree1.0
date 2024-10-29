import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreeStoryPageRoutingModule } from './tree-story-routing.module';

import { TreeStoryPage } from './tree-story.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreeStoryPageRoutingModule
  ],
  declarations: [TreeStoryPage]
})
export class TreeStoryPageModule {}
