import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { ModalController } from 'ionic-angular';

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

  	this.apiProvider.getTasks().then(data => {
	 this.tasks = data.data;
	 console.log(this.tasks);
	});
  }

  settings(){     
     const modal = this.modalCtrl.create(SettingsModalPage);
     modal.present();
  }

  showTask(id){
  	this.navCtrl.push(TaskPage, {id:id});
  }

}
