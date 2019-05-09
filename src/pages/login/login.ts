import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { InvitePage } from '../invite/invite';

import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';

import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loader:any;
  user:any = {email:'', password:''};

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public apiProvider: ApiProvider,
    public loadingCtrl: LoadingController,
    private storage: Storage
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentLoading(text) {
    this.loader = this.loadingCtrl.create({
      content: text,
    });
    this.loader.present();
  }

  signIn(){

    this.presentLoading("Iniciando Sesión");

    console.log(this.user)

    this.apiProvider.login(this.user).then(data => {
      console.log(data)
      this.storage.set('token', data.token);
      this.storage.set('user_roomies', JSON.stringify(data.user));
     this.loader.dismiss();
     this.navCtrl.push(TabsPage);
    });
  	 
  }

  invite(){
  	 this.navCtrl.push(InvitePage);
  }

}
