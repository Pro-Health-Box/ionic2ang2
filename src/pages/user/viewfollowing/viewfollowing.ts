import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewsellerPage } from '../viewseller/viewseller';


@Component({
  selector: 'page-viewfollowing',
  templateUrl: 'viewfollowing.html'
})
export class ViewfollowingPage {
  following: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.following = navParams.get('following');
  }

    viewUser(follow) {
    this.navCtrl.push(ViewsellerPage, {
        seller: follow
    });
  }

}
