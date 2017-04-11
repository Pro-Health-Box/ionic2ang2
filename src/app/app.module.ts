import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/items/items';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { UserprofilePage } from '../pages/userprofile/userprofile';
import { SingleitemPage } from '../pages/singleitem/singleitem';
import { ItemProvider } from '../providers/item-provider';
import { Profile } from '../providers/profile';
import { SignUp } from '../providers/sign-up';
import { AuthService } from '../providers/auth-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemsPage,
    LoginPage,
    RegisterPage,
    UserprofilePage,
    SingleitemPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemsPage,
    LoginPage,
    RegisterPage,
    UserprofilePage,
    SingleitemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemProvider,
    SignUp,
    AuthService,
    Profile
  ]
})
export class AppModule {}
