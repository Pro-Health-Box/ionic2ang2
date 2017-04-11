import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { UserprofilePage } from '../userprofile/userprofile';




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
    

    this.navCtrl.push(UserprofilePage, {
      user: user
    }); 
  };

  

}
