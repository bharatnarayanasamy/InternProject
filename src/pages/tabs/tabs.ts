import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BharatPage } from '../bharat/bharat';
import { JoshPage } from '../josh/josh';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = JoshPage
  tab7Root = BharatPage;

  constructor() {

  }
}
