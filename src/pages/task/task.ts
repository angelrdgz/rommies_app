import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { EditTaskPage } from '../edit-task/edit-task';

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {

  public tasks: Observable<any> = [];
  public task:any = [];
  user:any;
  canEdit:boolean = false;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
    public apiProvider: ApiProvider,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private storage: Storage) {

    this.storage.get('user_roomies').then((val) => {
        console.log('Your age is', JSON.parse(val));
        this.user = JSON.parse(val);
    });

  	this.apiProvider.getTask(this.navParams.get('id')).then(data => {
      this.task = data.data;
      console.log(this.task)
      this.checkTask();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  checkTask(){
      if(this.task.user_id == this.user.id){
        this.canEdit = true;
      }   
  }

  presentModal() {
    let modal = this.modalCtrl.create(EditTaskPage, {task: this.task});
    modal.onDidDismiss(data => {
      console.log(data);
      if(data.action){
        this.getTasks();
      }
    });
    modal.present();
  }

  getTasks(){
    this.apiProvider.getTasks().then(data => {
      this.tasks = data.data;
      console.log(this.tasks);
    });
  }

  showConfirm(title, msg) {
    const confirm = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.completeTask();
          }
        }
      ]
    });
    confirm.present();
  }

  complete(){
    this.showConfirm('¿Completó su tarea?', 'La tarea no aparecera para todos los involucrados');
  }

  completeTask(){
    this.apiProvider.completeTask(this.navParams.get('id')).then(data => {
      //this.task = data.data;
      console.log(data);
     });
  }

}
