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
import { NewTaskPage } from '../pages/new-task/new-task';
import { EditTaskPage } from '../pages/edit-task/edit-task';
import { SettingsModalPage } from '../pages/settings-modal/settings-modal';

import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { InterceptorProvider } from '../providers/interceptor/interceptor';

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
    TaskPage,
    NewTaskPage,
    EditTaskPage,
    SettingsModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
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
    TaskPage,
    NewTaskPage,
    EditTaskPage,
    SettingsModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true },
    ApiProvider,
  ]
})
export class AppModule {}
