import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  isLoggedin: any;
  AuthToken: any;
  user: any;


  constructor(public http: Http) {
    this.http = http;
    this.isLoggedin = false;
    this.AuthToken = null;
  }

  storeUserCredentials(token) {
    
    window.localStorage.setItem('secretKey', token);

  }

  storeUserInfo(data) {
    window.localStorage.setItem('user', data);
  }

  storeUserName(data) {
    window.localStorage.setItem('username', data);
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

    this.http.post('http://localhost:8080/authenticate', user , {headers: headers})
    .subscribe(data => {
      if(data.json().success){
       this.storeUserCredentials(data.json().token);
       this.storeUserName(data.json().user.username);
       this.useCredentials(data.json().token);
       
    }

      else {
        console.log('Error');
      }
  });
  
 
}

  logout() {

    this.destroyUserCredentials();
  
  }

}
