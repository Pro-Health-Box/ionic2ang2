import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, AlertController } from 'ionic-angular';
import { Profile } from '../../../providers/profile';
import { AuthService } from '../../../providers/auth-service';
import { ItemProvider } from '../../../providers/item-provider';
import { ItemsPage } from '../items/items';
import { UsersearchPage } from '../usersearch/usersearch';



@Component({
  selector: 'userprofile',
  templateUrl: 'userprofile.html'
})
export class UserprofilePage {
  user: any;
  users: any;
  username: any;
  token: any;
  loading: any;
  items: any;
  profilename: any;
  followers: any;
  following: any;
  useritems: any;
  useritemsLength: any;
  
  constructor( private itemService: ItemProvider, public navCtrl: NavController, public params: NavParams, public profile: Profile, public AuthService: AuthService, public loadingCtrl: LoadingController, public modalCtrl: ModalController, alertCtrl: AlertController) {


   this.username = window.localStorage.getItem('username');
   this.token = window.localStorage.getItem('secretKey');
   this.AuthService.useCredentials(this.token);

   this.profile.getUserProfile(this.username).then((data) => {
             
        this.user = data;
        this.profilename = this.user.username;
        this.followers = this.user['followers'].length;
        this.following = this.user['following'].length;
        this.useritems = this.user['items'];
        this.useritemsLength = this.user['items'].length;
        console.log(this.user);

    });

    this.itemService.getUserItems(this.username).then((data) => {
      console.log(data);
      this.items = data;
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

  searchUsers() {
    
    this.navCtrl.push(UsersearchPage);

  }


   

}
