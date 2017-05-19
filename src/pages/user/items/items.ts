import { Component } from '@angular/core';
import { ViewController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/camera';


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
  images: any;
  tmpImg: any;

  constructor(public viewCtrl: ViewController, public toastCtrl: ToastController, private camera: Camera) {
    this.username = window.localStorage.getItem('username');  
    this.images = [];
  } 

  getPicture(){

    const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
          this.tmpImg = "data:image/jpeg;base64," + imageData;
          this.images.push(this.tmpImg);
        }, (err) => {
          console.log(err);
        })
    }

  

    save(): void {
      let item = {
        title: this.title,
        description: this.description,
        price: this.price,
        image: this.images,
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
