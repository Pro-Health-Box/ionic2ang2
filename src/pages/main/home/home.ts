import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { ItemsPage } from '../../user/items/items';
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



  goRegister() {
    this.navCtrl.push(RegisterPage);
  }


  goLogin() {
    this.navCtrl.push(LoginPage);
  }


}
