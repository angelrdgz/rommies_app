import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

import { LoginPage } from '../login/login';

/**
 * Generated class for the SettingsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings-modal',
  templateUrl: 'settings-modal.html',
})
export class SettingsModalPage {

  user:any;
  loader:any;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public apiProvider: ApiProvider,
  	public loadingCtrl: LoadingController,
  	private storage: Storage) {
  	this.storage.get('user_roomies').then((val) => {
	    console.log('Your age is', JSON.parse(val));
	    this.user = JSON.parse(val);
	});
  }

  presentLoading(text) {
    this.loader = this.loadingCtrl.create({
      content: text,
    });
    this.loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsModalPage');
  }

  logout(){

  	this.presentLoading("Cerrando Sesión");
  	this.apiProvider.logout().then(data => {
     this.storage.clear();
	 console.log(data);
	 this.loader.dismiss();
	 this.navCtrl.setRoot(LoginPage);
	});

  }

}
