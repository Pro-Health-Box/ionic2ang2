import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'items',
  templateUrl: 'items.html'
})
export class ItemsPage {

  title: any;
  description: any;
  price: any;
  image: any;
  seller: any;
  username: any;
  brand: any;
  size: any;
  type: any;
  condition: any;

  constructor(public viewCtrl: ViewController) {
    this.username = window.localStorage.getItem('username');
  }

  

  save(): void {
    let item = {
      title: this.title,
      description: this.description,
      price: this.price,
      image: this.image,
      seller: this.username,
      brand: this.brand,
      size: this.size,
      type: this.type,
      condition: this.condition
    };

    this.viewCtrl.dismiss(item);
  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}
