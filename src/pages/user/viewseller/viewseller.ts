import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ItemProvider } from '../../../providers/item-provider';
import { ViewselleritemPage } from '../../user/viewselleritem/viewselleritem';
import { Profile } from '../../../providers/profile';
import { ViewfollowersPage } from '../viewfollowers/viewfollowers';
import { ViewfollowingPage } from '../viewfollowing/viewfollowing';



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
  allFollowers: any;
  allFollowing: any;
  index: any;
  isFollowing: any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public itemService: ItemProvider, public profile: Profile, public alertCtrl: AlertController, public toastCtrl: ToastController ){

    this.seller = navParams.get('seller');
    this.username = window.localStorage.getItem('username');
    this.isFollowing = true;

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
        this.allFollowers = this.user['followers'];
        this.allFollowing = this.user['following'];
        console.log(this.allFollowers);

    });

  


  }
  
  /*
   showFollowing() {
      this.index = this.allFollowers.indexOf(this.username);
      if(this.index > -1) {
        this.isFollowing = true;
        console.log(this.isFollowing);
        } 
      else {
        this.isFollowing = false;
        console.log(this.isFollowing);
        } 
    }
    */
    

  viewFollowers(allFollowers) { 
    this.navCtrl.push(ViewfollowersPage, {
        follows: allFollowers
    });
  }

  viewFollowing(allFollowing) {
    this.navCtrl.push(ViewfollowingPage, {
        following: allFollowing
    });
  }

   viewUserItem(item) {
    this.navCtrl.push(ViewselleritemPage, {
        item: item
    });
  }

  presentToast() {

    let toast = this.toastCtrl.create({
      message: 'You are now following ' + this.seller,
      showCloseButton: true,
      closeButtonText: "X",
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
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
          this.presentToast();
        }
      }
    ]
  });

  alert.present();
}

 


}
