import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BharatPage } from '../bharat/bharat';
import { JoshPage } from '../josh/josh';
import { SloanPage } from '../sloan/sloan';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = JoshPage;
  tab7Root = BharatPage;
  tab3Root = SloanPage;
  //hi
  //this is a test that I want to work


  constructor() {

  }
}
