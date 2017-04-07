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


  constructor(public viewCtrl: ViewController) {}

  save(): void {
    let item = {
      title: this.title,
      description: this.description,
      price: this.price,
      image: this.image
    };

    this.viewCtrl.dismiss(item);
  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}
