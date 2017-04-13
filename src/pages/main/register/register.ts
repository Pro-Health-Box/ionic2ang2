import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SignUp } from '../../../providers/sign-up';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})

export class RegisterPage {

  email: any;
  username: any;
  password: any;
  password2: any;


  constructor(public viewCtrl: ViewController, public alertCtrl: AlertController, public SignUp: SignUp) {}

    save(): void {

    let pass1 = (<HTMLInputElement>document.getElementById('password')).value;
    let pass2 = (<HTMLInputElement>document.getElementById('password2')).value;
    if(pass1 === pass2){

    let user = {
      email: this.email,
      username: this.username,
      password: this.password,
      password2: this.password2
    };

    
    this.SignUp.createUser(user);
    this.viewCtrl.dismiss(user);
    console.log(user);  
  }

    else {
      let alert = this.alertCtrl.create({
        title:'Incorrect Password',
        subTitle: 'Please make sure your passwords match',
        buttons: ['OK']
      });
      alert.present();
      console.log(pass1);
      console.log(pass2);
    }
  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}





