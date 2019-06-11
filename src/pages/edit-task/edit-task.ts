import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the EditTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-task',
  templateUrl: 'edit-task.html',
})
export class EditTaskPage {

  public task:any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public apiProvider: ApiProvider,) {
    this.task = this.navParams.get('task');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTaskPage');
  }

  dismiss() {
    this.viewCtrl.dismiss({action:false});
  }


}
