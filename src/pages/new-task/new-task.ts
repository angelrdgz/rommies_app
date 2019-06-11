import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';

/**
 * Generated class for the NewTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage {

  loader:any;
  task:any = {title:'', description:'', schedule: false, roomies:[]};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public apiProvider: ApiProvider,
    public loadingCtrl: LoadingController,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTaskPage');
    this.task = {title:'', description:'', schedule: false, roomies:[]};
  }

  presentLoading(text) {
    this.loader = this.loadingCtrl.create({
      content: text,
    });
    this.loader.present();
  }

  dismiss() {
    this.viewCtrl.dismiss({action:false});
  }

  addTask(){

    this.presentLoading("Iniciando Sesión");

    console.log(this.task)

    this.apiProvider.addTask(this.task).then(data => {
      console.log(data)
      if(data.status == "error"){
        this.loader.dismiss();
      }else{
        this.loader.dismiss();
        this.viewCtrl.dismiss({action:true})
      }     
    });

  }

}
