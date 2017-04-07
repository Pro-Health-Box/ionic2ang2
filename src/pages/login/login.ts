import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public AuthService: AuthService) {

    this.user = {
      email: '',
      password: ''
    }

  }

  login(user) {
    this.AuthService.login(user);
       this.navCtrl.push(HomePage); 
  };

  

}
