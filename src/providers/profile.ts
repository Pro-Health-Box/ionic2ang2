import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class Profile {
  data: any;
  user: any;
  constructor(public http: Http) {

  
  
  }


  getUserProfile(user) {

   return new Promise(resolve => {
      this.http.post('http://localhost:8080/api/userprofile', { username: user} )
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
        console.log(this.data);
      });
    });
  }

  getAllUsers() {
      
      return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/allUsers')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
        console.log(this.data);
      });
    });
  }


  followUser(username,seller) {

    return new Promise(resolve => {
      this.http.post('http://localhost:8080/api/following', { username:username, seller: seller} )
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
        console.log(this.data);
      });
    });
  }

  addFollower(username,seller) {

    return new Promise(resolve => {
      this.http.post('http://localhost:8080/api/follower', { username:username, seller: seller} )
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
        console.log(this.data);
      });
    });
  }

}
