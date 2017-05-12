import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewsellerPage } from '../viewseller/viewseller';


@Component({
  selector: 'page-viewfollowers',
  templateUrl: 'viewfollowers.html'
})
export class ViewfollowersPage {
  followers: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.followers = navParams.get('follows');
    
  }


  viewUser(follower) {
    this.navCtrl.push(ViewsellerPage, {
        seller: follower
    });
  }


}
