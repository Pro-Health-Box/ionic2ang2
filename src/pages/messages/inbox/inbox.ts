import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';




@Component({
  selector: 'inbox',
  templateUrl: 'inbox.html'
})
export class InboxPage {
  message: any;
  To: any;
  From: any;
  date: any;
  messages: any;
  images: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.From = window.localStorage.getItem('username');
  }

 send(message) {
    message = {
      To: this.To,
      From: this.From,
      messages: this.messages,
      images: this.images
    };
 }

}
