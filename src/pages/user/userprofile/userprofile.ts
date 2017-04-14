import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Profile } from '../../../providers/profile';
import { AuthService } from '../../../providers/auth-service';
import { ItemProvider } from '../../../providers/item-provider';
import { ItemsPage } from '../items/items';



@Component({
  selector: 'userprofile',
  templateUrl: 'userprofile.html'
})
export class UserprofilePage {
  user: any;
  username: any;
  token: any;
  loading: any;
  items: any;
  profilename: any;
  followers: any;
  following: any;


  constructor( private itemService: ItemProvider, public navCtrl: NavController, public params: NavParams, public profile: Profile, public AuthService: AuthService, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {


   this.username = window.localStorage.getItem('username');
   this.token = window.localStorage.getItem('secretKey');
   this.AuthService.useCredentials(this.token);

   this.profile.getUserProfile(this.username).then((data) => {
             
        this.user = data;
        this.profilename = this.user.username;
        this.followers = this.user['followers'].length;
        this.following = this.user['following'].length;

    });
    
  }


    addItem() {
    let modal = this.modalCtrl.create(ItemsPage);

    modal.onDidDismiss(item=> {
      if(item){
        this.items.push(item);
        this.itemService.createItem(item);
        console.log(item);
      }
    });

    modal.present();
  }

  deleteItem(item) {

    //remove locally

    let index = this.items.indexOf(item);

    if(index > -1) {
      this.items.splice(index, 1);
    }

    //remove from database
    this.itemService.deleteItem(item._id);
  }


   

}
