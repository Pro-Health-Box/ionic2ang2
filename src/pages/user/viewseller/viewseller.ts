import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ItemProvider } from '../../../providers/item-provider';
import { ViewselleritemPage } from '../../user/viewselleritem/viewselleritem';
import { Profile } from '../../../providers/profile';



@Component({
  selector: 'page-viewseller',
  templateUrl: 'viewseller.html'
})
export class ViewsellerPage {
  items: any;
  seller: any;
  user: any;
  username: any;
  profilename: any;
  followers: any;
  following: any;
  useritems: any;
  useritemsLength: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public itemService: ItemProvider, public profile: Profile, public alertCtrl: AlertController ){

    this.seller = navParams.get('seller');
    console.log(this.seller);
    this.username = window.localStorage.getItem('username');
    
    this.itemService.getUserItems(this.seller).then((data) => {
      console.log(data);
      this.items = data;
    });

    this.profile.getUserProfile(this.seller).then((data) => {
             
        this.user = data;
        this.profilename = this.user.username;
        this.followers = this.user['followers'].length;
        this.following = this.user['following'].length;
        this.useritems = this.user['items'];
        this.useritemsLength = this.user['items'].length;
        console.log(this.user);

    });
    
  }

   viewUserItem(item) {
    this.navCtrl.push(ViewselleritemPage, {
        item: item
    });
  }


  followAlert() {
    
    let alert = this.alertCtrl.create({
    title: 'Follow',
    message: 'Are you sure you want to start following ' + this.seller,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Add',
        handler: () => {
          this.profile.followUser(this.username,this.seller).then((data) => {
            console.log(data);
          });

          this.profile.addFollower(this.username,this.seller).then((data) => {
            console.log(data);
          });
        }
      }
    ]
  });

  alert.present();
}

 


}
