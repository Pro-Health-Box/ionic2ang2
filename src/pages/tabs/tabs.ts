import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { SettingsPage } from '../settings/settings';
import { InboxPage } from '../inbox/inbox';
import { UserprofilePage } from '../userprofile/userprofile';

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
