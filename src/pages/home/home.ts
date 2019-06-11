import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { NewTaskPage } from '../new-task/new-task';

import { TaskPage } from '../task/task';
import { SettingsModalPage } from '../settings-modal/settings-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   tasks: Observable<any>;

  constructor(
  	public navCtrl: NavController, 
  	public apiProvider: ApiProvider,
  	public modalCtrl: ModalController
  	) {


      this.getTasks();
  	
  }

  settings(){     
     const modal = this.modalCtrl.create(SettingsModalPage);
     modal.present();
  }

  showTask(id){
  	this.navCtrl.push(TaskPage, {id:id});
  }

  getTasks(){
    this.apiProvider.getTasks().then(data => {
      this.tasks = data.data;
      console.log(this.tasks);
    });
  }

  presentModal() {
    let modal = this.modalCtrl.create(NewTaskPage);
    modal.onDidDismiss(data => {
      console.log(data);
      if(data.action){
        this.getTasks();
      }
    });
    modal.present();
  }

}
