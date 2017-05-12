import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../../providers/auth-service';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../../tabs/tabs';
import { RegisterPage } from '../register/register';




@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: any;
  loading: any;
  error: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public AuthService: AuthService, public loadingCtrl: LoadingController) {

    this.user = {
      email: '',
      password: ''
    }


  this.loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Logging in ...',
    duration: 1500
  });

  
}

  login(user) {

    this.AuthService.login(user); 
    
    this.navCtrl.setRoot(TabsPage, {
      user: user
    }); 
     this.loading.present();  
  }

    goRegister() {
    this.navCtrl.push(RegisterPage);
  }

    /*     
     
    */

}
