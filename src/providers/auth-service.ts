import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
  isLoggedin: any;
  AuthToken: any;

  constructor(public http: Http) {
    this.http = http;
    this.isLoggedin = false;
    this.AuthToken = null;
  }

  storeUserCredentials(token) {
    window.localStorage.setItem('jamaal', token);

  }

  useCredentials(token) {
    this.isLoggedin = true;
    this.AuthToken = token;
  }

  loadUserCredentials() {
    var token = window.localStorage.getItem('jamaal');
    this.useCredentials(token);
  }

  destroyUserCredentials() {
    this.isLoggedin = false;
    this.AuthToken = null;
    window.localStorage.clear();
  }

  login(user) {

    let headers= new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:8080/authenticate', JSON.stringify(user), {headers: headers})
    .subscribe(data => {
      if(data.json().success){
       this.storeUserCredentials(data.json().token);  
    }
      else {
        
      }
  });
  
 
  }

}
