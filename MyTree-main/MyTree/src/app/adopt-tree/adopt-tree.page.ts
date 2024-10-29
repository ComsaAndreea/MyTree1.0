import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
//import { TreeAdoptedChange } from './tree-filter-pipe';

@Component({
  selector: 'app-adopt-tree',
  templateUrl: './adopt-tree.page.html',
  styleUrls: ['./adopt-tree.page.scss'],
})
export class AdoptTreePage implements OnInit {

  items: Observable<any[]>;
  constructor(private activatedRoute: ActivatedRoute, public afDb: AngularFireDatabase, public alertController: AlertController) {
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

  async presentAlert(tree: any) {
    const alert = await this.alertController.create({
      header: 'Yay!',
      message: 'You successfully adopted the tree '+ tree + '!',
      buttons: ['Thank you!']
    });

    await alert.present();
    /*this.items.forEach(element => {
    if (tree===element) {
      element.adoptedChange();
    }
    });*/
    console.log(tree.Address);
    const itemsRef = this.afDb.list('trees');
    console.log(itemsRef);
    // to get a key, check the Example app below
   // this.afDb.getInstance().getReference().child("trees");
    //const treee = this.afDb.snapshot.child('trees');
   /* this.afDb.orderByChild('uid').once('value', (snapshot) => {
      let Catdata = snapshot.val();
      let temparr = [];
      for (var key in Catdata) {
          temparr.push(Catdata[key]);
      }*/


    // eslint-disable-next-line @typescript-eslint/naming-convention
    itemsRef.update(tree, { Adopted : 1 });
  }

}
