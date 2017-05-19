import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SignUp {

  constructor(public http: Http) {
    console.log('Hello SignUp Provider');
  }

  createUser(user) {
    let headers= new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('https://kickpusherz.herokuapp.com/api/signup', JSON.stringify(user), {headers: headers})
    .subscribe(res => {
      console.log(res.json());
    });
  }

}
