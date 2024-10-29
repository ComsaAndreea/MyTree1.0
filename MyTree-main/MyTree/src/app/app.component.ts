import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Tree Status', url: '/tree-status', icon: 'home' },
    { title: 'Adopt a tree', url: '/adopt-tree', icon: 'heart' },
    
    { title: 'Tree Story', url: '/tree-story', icon: "leaf"},
    { title: 'Care Guide', url: '/care-guide', icon: 'information-circle' },

    { title: 'Adopted Trees', url: '/adopted-trees', icon: 'heart-circle' }

 
  ];
  
  constructor() {}
}
