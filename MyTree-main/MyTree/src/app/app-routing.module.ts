import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tree-status',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  
  {
    path: 'tree-story',
    loadChildren: () => import('./tree-story/tree-story.module').then( m => m.TreeStoryPageModule)
  },

  {
    path: 'care-guide',
    loadChildren: () => import('./care-guide/care-guide.module').then( m => m.CareGuidePageModule)
  },

  {
    path: 'adopt-tree',
    loadChildren: () => import('./adopt-tree/adopt-tree.module').then(m => m.AdoptTreePageModule)
  },

  {
    path: 'adopted-trees',
    loadChildren: () => import('./adopted-trees/adopted-trees.module').then( m => m.AdoptedTreesPageModule)
  },

  {
    path: 'tree-status',
    loadChildren: () => import('./tree-status/tree-status.module').then( m => m.TreeStatusPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
