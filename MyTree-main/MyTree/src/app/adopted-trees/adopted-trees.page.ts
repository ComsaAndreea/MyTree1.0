import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adopted-trees',
  templateUrl: './adopted-trees.page.html',
  styleUrls: ['./adopted-trees.page.scss'],
})
export class AdoptedTreesPage implements OnInit {
  items: Observable<any[]>;
  constructor(private activatedRoute: ActivatedRoute, afDb: AngularFireDatabase) {
    this.items = afDb.list('trees').valueChanges();
  }

  ngOnInit() {
  }
  func(la: number,lo: number){
    const a =document.createElement('a');
    a.target='_blank';
    a.href='https://www.google.com/maps/search/?api=1&query='+la+','+lo;
    a.click();
  }
}

