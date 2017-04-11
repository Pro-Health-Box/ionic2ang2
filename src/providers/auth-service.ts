import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  isLoggedin: any;
  AuthToken: any;
  userInfo: any;
  user: any;
  creds: any;
  userCreds: any;

  constructor(public http: Http) {
    this.http = http;
    this.isLoggedin = false;
    this.AuthToken = null;
  }

  storeUserCredentials(token) {
    
    window.localStorage.setItem('jamaal', token);

  }

  storeUserInfo(data) {
    window.localStorage.setItem('user', data);
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
       console.log(data.json().user);
       this.storeUserInfo(data.json().user);
       this.loadUserCredentials();
       
    }

      else {
        console.log('Error');
      }
  });
  
 
  }

}
