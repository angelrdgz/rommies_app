import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

	public tasks: Observable<any>;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	public apiProvider: ApiProvider) {

  	this.apiProvider.getTask(this.navParams.get('id')).then(data => {
	 this.task = data.data;
	 console.log(this.task);
	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

}
