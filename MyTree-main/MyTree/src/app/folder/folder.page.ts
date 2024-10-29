import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  items: Observable<any[]>;
  constructor(private activatedRoute: ActivatedRoute, afDb: AngularFireDatabase) {
    this.items = afDb.list('SensorData').valueChanges();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
