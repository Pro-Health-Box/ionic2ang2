import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { ItemsPage } from '../items/items';
import { RegisterPage } from '../register/register';
import { SingleitemPage } from '../singleitem/singleitem';
import { ViewsellerPage } from '../viewseller/viewseller';
import { LoginPage } from '../login/login';
import { ItemProvider } from '../../providers/item-provider';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;
  loading: any;

  constructor(public navCtrl: NavController, public itemService: ItemProvider, public modalCtrl: ModalController) {
   
 
  }

  ionViewDidLoad() {
    this.itemService.getItems().then((data) => {
      console.log(data);
      this.items = data;
    });
  }

  viewItem(item) {
    this.navCtrl.push(SingleitemPage, {
        item: item
    });
  }

  viewSeller(seller) {
    
    this.navCtrl.push(ViewsellerPage, {
        seller: seller
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

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }


  goLogin() {
    this.navCtrl.push(LoginPage);
  }


}
