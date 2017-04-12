import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemProvider } from '../../providers/item-provider';
import { SingleitemPage } from '../../pages/singleitem/singleitem';



@Component({
  selector: 'page-viewseller',
  templateUrl: 'viewseller.html'
})
export class ViewsellerPage {
  items: any;
  seller: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public itemService: ItemProvider) {

    this.seller = navParams.get('seller');
    console.log(this.seller);
    
    this.itemService.getUserItems(this.seller).then((data) => {
      console.log(data);
      this.items = data;
    });
    
  }

   viewUserItem(item) {
    this.navCtrl.push(SingleitemPage, {
        item: item
    });
  }

 


}
