import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"

import { Storage } from '@ionic/storage';

@Injectable()
export class ApiProvider {

	url = "http://127.0.0.1:8000/api/v1";
	public token:Observable<string>;
	httpOptions:Observable<any>;
	authenticated = false;
    message = '';


  constructor(public http: HttpClient, private storage: Storage) { }

  login(data){
  	console.log(data);
  	return new Promise(resolve => {
		this.http.post(this.url+'/login',data).subscribe(data => {
		  resolve(data);
	    }, 
		err => {
		console.log(err);
		});
	});
  }

  logout(){
  	return new Promise(resolve => {
		this.http.get(this.url+'/logout').subscribe(data => {
		  resolve(data);
	    }, 
		err => {
		console.log(err);
		});
	});
  }

  register(data){
  	return this.http.post(this.url+'/register', data);
  }

  registerRoomie(data){
  	return this.http.post(this.url+'/register-roomie', data);
  }

  getTasks(){
  	return new Promise(resolve => {
		this.http.get(this.url+'/tasks').subscribe(data => {
		  resolve(data);
	    }, 
		err => {
		console.log(err);
		});
	});
  }

  getTask(id){
  	return new Promise(resolve => {
		this.http.get(this.url+'/tasks/'+id).subscribe(data => {
		  resolve(data);
	    }, 
		err => {
		console.log(err);
		});
	});
  }

  completeTask(id){
	return new Promise(resolve => {
		this.http.delete(this.url+'/tasks/'+id, {}).subscribe(data => {
		  resolve(data);
	    }, 
		err => {
		console.log(err);
		});
	});
  }

  addTask(task){
	return new Promise(resolve => {
		this.http.post(this.url+'/tasks', task).subscribe(data => {
		  resolve(data);
	    }, 
		err => {
		console.log(err);
		});
	});
  }

}
