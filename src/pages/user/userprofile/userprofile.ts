import {App} from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Profile } from '../../../providers/profile';
import { AuthService } from '../../../providers/auth-service';
import { ItemProvider } from '../../../providers/item-provider';
import { LoginPage } from '../../main/login/login';
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

  constructor(private app: App, private itemService: ItemProvider, public navCtrl: NavController, public params: NavParams, public profile: Profile, public AuthService: AuthService, public loadingCtrl: LoadingController, public modalCtrl: ModalController) {

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
     
      this.itemService.getItems().then((data) => {
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

  logout() {

    this.loading.present();
    this.AuthService.logout();
    this.app.getRootNav().setRoot(LoginPage);
  }

   

}
