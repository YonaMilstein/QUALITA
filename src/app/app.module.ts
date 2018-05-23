import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DirectPage } from '../pages/direct/direct'; 
import { SearchPage } from '../pages/search/search';
import { VodPage } from '../pages/vod/vod';
import { ParticipatePage } from '../pages/participate/participate';

import { HttpModule } from '@angular/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { PlaylistPage } from '../pages/playlist/playlist';
import { enableProdMode } from '@angular/core';
import { YtProvider } from '../providers/yt/yt';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlaylistPage,
    DirectPage,
    SearchPage,
    VodPage,
    ParticipatePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlaylistPage,
    DirectPage,
    SearchPage,
    VodPage,
    ParticipatePage,
    TabsPage
  ],
  providers: [
    YtProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
    YoutubeVideoPlayer
  ]
})
export class AppModule {}
