import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ComplaintsPage } from '../complaints/complaints';
import { PurchasesPage } from '../purchases/purchases';
import { ShoppingListsPage } from '../shopping-lists/shopping-lists';
import { TasksPage } from '../tasks/tasks';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PurchasesPage;
  tab3Root = ShoppingListsPage;
  tab4Root = TasksPage;
  tab5Root = ComplaintsPage;

  constructor() {

  }
}
