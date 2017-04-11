import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { UserprofilePage } from '../userprofile/userprofile';
import { LoadingController } from 'ionic-angular';




@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public AuthService: AuthService, public loadingCtrl: LoadingController) {

    this.user = {
      email: '',
      password: ''
    }

  this.loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Please Wait. Logging in ...',
    duration: 1500
  });

  
}

  login(user) {

    this.loading.present();
    this.AuthService.login(user);
    

    this.navCtrl.push(UserprofilePage, {
      user: user
    }); 
  };

  

}
