import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../../providers/profile';


@Component({
  selector: 'page-usersearch',
  templateUrl: 'usersearch.html'
})
export class UsersearchPage {
  users: any;
  user: any;
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public profile: Profile) {
  
    this.initUsers();
  }

  initUsers() {
      this.profile.getAllUsers().then((data) => {
      this.users = data;
    });
  }


 getUsers(ev: any) {
    // Reset items back to all of the items
    if(ev.target.value === ""){
      this.initUsers();
    }

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.users = this.users.filter((user) => {
        let name: any = user;
        return (name.username.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}
