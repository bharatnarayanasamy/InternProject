import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BharatPage } from '../bharat/bharat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BharatPage;

  constructor() {

  }
}
