import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { SingleitemPage } from '../../user/singleitem/singleitem';
import { ViewsellerPage } from '../../user/viewseller/viewseller';
import { LoginPage } from '../login/login';
import { ItemProvider } from '../../../providers/item-provider';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;
  loading: any;

  constructor(public navCtrl: NavController, public itemService: ItemProvider, public modalCtrl: ModalController) {
   
    this.initItems();

  }

  initItems() {
    this.itemService.getItems().then((data) => {
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



  goRegister() {
    this.navCtrl.push(RegisterPage);
  }


  goLogin() {
    this.navCtrl.push(LoginPage);
  }

   getItems(ev: any) {
    // Reset items back to all of the items
    if(ev.target.value === ""){
      this.initItems();
    }

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        let name: any = item;
        return (name.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}
