import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { BharatPageModule } from '../pages/bharat/bharat.module';
import { JoshPageModule } from '../pages/josh/josh.module';
import { SloanPageModule} from '../pages/sloan/sloan.module';

import { JoshPostsProvider } from '../providers/josh-posts/josh-posts';
import { PostsProvider } from '../providers/posts/posts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    JoshPageModule,
    BharatPageModule,
    SloanPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostsProvider,
    JoshPostsProvider
  ]
})
export class AppModule {}
