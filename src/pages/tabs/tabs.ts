import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { JoshPage } from '../josh/josh';
import { SloanPage } from '../sloan/sloan';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = JoshPage;
  tab3Root = SloanPage;
  //hi

  constructor() {

  }
}
