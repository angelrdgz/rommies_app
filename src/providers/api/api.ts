import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"

import { Storage } from '@ionic/storage';

@Injectable()
export class ApiProvider {

	url = "http://127.0.0.1:8000/api/v1";
	public token:Observable<string>;
	httpOptions:any;


  constructor(public http: HttpClient, private storage: Storage) {
  	console.log(this.storage.get('token'))

		this.httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json',
		    'Authorization': 'Bearer '+this.storage.get('token')
		  })
		};

	

  }

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
		this.http.get(this.url+'/logout', this.httpOptions).subscribe(data => {
		  resolve(data);
	    }, 
		err => {
		console.log(err);
		});
	});
  }

  register(){
  	return this.http.post(this.url+'/register');
  }

  registerRoomie(){
  	return this.http.post(this.url+'/register-roomie');
  }

  getTasks(){
  	console.log(this.httpOptions)
  	storage.get('token').then((val) => {
	    console.log('Your age is', val);
	});
  	return new Promise(resolve => {
		this.http.get(this.url+'/tasks', this.httpOptions).subscribe(data => {
		  resolve(data);
	    }, 
		err => {
		console.log(err);
		});
	});
  }

  getTask(id){
  	return new Promise(resolve => {
		this.http.get(this.url+'/tasks/'+id, this.httpOptions).subscribe(data => {
		  resolve(data);
	    }, 
		err => {
		console.log(err);
		});
	});
  }

}
