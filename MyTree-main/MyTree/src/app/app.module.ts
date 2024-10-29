import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


export const firebaseConfig = {
  apiKey: "AIzaSyDyTFkWtF2i4gIJNqB5TKkr0eDDZgBZEYQ",
  authDomain: "mytree-f5042.firebaseapp.com",
  databaseURL: "https://mytree-f5042-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mytree-f5042",
  storageBucket: "mytree-f5042.appspot.com",
  messagingSenderId: "41048567191",
  appId: "1:41048567191:web:b67b35bec83ebb8c6568d2",
  measurementId: "G-QYMZ87C2X7"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFireDatabaseModule],
  providers: [AngularFireDatabase, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
