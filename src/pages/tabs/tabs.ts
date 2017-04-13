import { Component } from '@angular/core';
import { HomePage } from '../../pages/main/home/home';
import { SearchPage } from '../../pages/main/search/search';
import { SettingsPage } from '../../pages/main/settings/settings';
import { InboxPage } from '../../pages/messages/inbox/inbox';
import { UserprofilePage } from '../../pages/user/userprofile/userprofile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SearchPage;
  tab3Root: any = InboxPage;
  tab4Root: any = UserprofilePage;
  tab5Root: any = SettingsPage;

  constructor() {

  }
}
