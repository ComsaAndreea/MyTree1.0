import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-folder',
  templateUrl: './tree-status.page.html',
  styleUrls: ['./tree-status.page.scss'],
})
export class TreeStatusPage implements OnInit {
  public folder: string;
  sensorData: any;
  constructor(private activatedRoute: ActivatedRoute, afDb: AngularFireDatabase) {
    this.sensorData = afDb.object('SensorData').valueChanges();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
