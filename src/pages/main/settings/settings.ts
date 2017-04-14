import {App} from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthService } from '../../../providers/auth-service';
import { LoginPage } from '../../main/login/login';



@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {
  loading: any;
  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public AuthService: AuthService) {

    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Logging out ...',
      duration: 1500
    });
  }

   logout() {

    this.loading.present();
    this.AuthService.logout();
    this.app.getRootNav().setRoot(LoginPage);
  }

}
