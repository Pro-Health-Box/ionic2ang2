import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Profile } from '../../providers/profile';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../../pages/home/home';



@Component({
  selector: 'userprofile',
  templateUrl: 'userprofile.html'
})
export class UserprofilePage {
  user: any;
  username: any;
  token: any;
  loading: any;
  constructor(public navCtrl: NavController, public params: NavParams, public profile: Profile, public AuthService: AuthService, public loadingCtrl: LoadingController) {
    
    this.loading = this.loadingCtrl.create({
    spinner: 'crescent',
    content: 'Logging out ...',
    duration: 1500
  });
    
  }

    ionViewDidLoad() {
      
      
      this.username = window.localStorage.getItem('username');
      this.token = window.localStorage.getItem('secretKey');
      this.AuthService.useCredentials(this.token);
      
     
  }

  logout() {

    this.loading.present();
    this.AuthService.logout();
    this.navCtrl.setRoot(HomePage);

  }

   

}
