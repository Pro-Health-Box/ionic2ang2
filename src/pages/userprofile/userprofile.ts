import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../providers/profile';

/*
  Generated class for the Userprofile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'userprofile',
  templateUrl: 'userprofile.html'
})
export class UserprofilePage {
  user: any;
  constructor(public navCtrl: NavController, public params: NavParams, public profile: Profile) {
    this.user = params.get('user');
    
  }

    ionViewDidLoad() {
    this.profile.getUser().then((data) => {
      
      this.user = data;
    
  });
  }

   

}
