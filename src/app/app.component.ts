import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  token:string;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private storage: Storage) {
    platform.ready().then(() => {
      let self = this;
      this.storage.get('token').then((condition) => {
        if(condition == null || condition == undefined){
        self.rootPage = LoginPage;
        }else{
          this.token
        self.rootPage = LoginPage;
        }
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
