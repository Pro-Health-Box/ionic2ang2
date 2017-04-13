import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/main/home/home';
import { ItemsPage } from '../pages/user/items/items';
import { RegisterPage } from '../pages/main/register/register';
import { LoginPage } from '../pages/main/login/login';
import { UserprofilePage } from '../pages/user/userprofile/userprofile';
import { SingleitemPage } from '../pages/user/singleitem/singleitem';
import { ViewsellerPage } from '../pages/user/viewseller/viewseller';
import { ViewselleritemPage } from '../pages/user/viewselleritem/viewselleritem';
import { SearchPage } from '../pages/main/search/search';
import { InboxPage } from '../pages/messages/inbox/inbox';
import { SettingsPage } from '../pages/main/settings/settings';


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
