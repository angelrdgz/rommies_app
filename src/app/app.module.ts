import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { InvitePage } from '../pages/invite/invite';
import { ComplaintsPage } from '../pages/complaints/complaints';
import { ComplaintPage } from '../pages/complaint/complaint';
import { PurchasePage } from '../pages/purchase/purchase';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { TaskPage } from '../pages/task/task';
import { PurchasesPage } from '../pages/purchases/purchases';
import { ShoppingListsPage } from '../pages/shopping-lists/shopping-lists';
import { TasksPage } from '../pages/tasks/tasks';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    InvitePage,
    ComplaintPage,
    ComplaintsPage,
    PurchasesPage,
    ShoppingListPage,
    ShoppingListsPage,
    TasksPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    InvitePage,
    ComplaintPage,
    ComplaintsPage,
    PurchasesPage,
    ShoppingListPage,
    ShoppingListsPage,
    TasksPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
