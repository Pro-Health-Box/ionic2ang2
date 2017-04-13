import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/items/items';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { UserprofilePage } from '../pages/userprofile/userprofile';
import { SingleitemPage } from '../pages/singleitem/singleitem';
import { ViewsellerPage } from '../pages/viewseller/viewseller';
import { ViewselleritemPage } from '../pages/viewselleritem/viewselleritem';
import { SearchPage } from '../pages/search/search';
import { InboxPage } from '../pages/inbox/inbox';
import { SettingsPage } from '../pages/settings/settings';


import { ItemProvider } from '../providers/item-provider';
import { Profile } from '../providers/profile';
import { SignUp } from '../providers/sign-up';
import { AuthService } from '../providers/auth-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemsPage,
    LoginPage,
    RegisterPage,
    UserprofilePage,
    SingleitemPage,
    ViewsellerPage,
    ViewselleritemPage,
    SearchPage,
    TabsPage,
    InboxPage,
    SettingsPage 
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
    SingleitemPage,
    ViewsellerPage,
    ViewselleritemPage,
    SearchPage,
    TabsPage,
    InboxPage,
    SettingsPage 
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
