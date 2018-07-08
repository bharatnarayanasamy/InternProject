import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { JoshPage } from '../josh/josh';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = JoshPage;

  constructor() {

  }
}
