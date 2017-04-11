import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Profile provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Profile {
  data: any;
  constructor(public http: Http) {
    this.data = null;
  }

  getUser() {
    if(this.data) {
      return Promise.resolve(this.data);
    }

  return new Promise(resolve => {
    this.http.get('http://localhost:8080/api/user')
    .map(res => res.json())
    .subscribe(data => {
      this.data = data;
      resolve(this.data);
    });
  });
}

}
