import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DirectPage } from '../pages/direct/direct';
import { TabsPage } from '../pages/tabs/tabs';
import { ParticipatePage } from '../pages/participate/participate';
import { VodPage } from '../pages/vod/vod';
import { SearchPage } from '../pages/search/search';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YtProvider } from '../providers/yt/yt';
import { PlaylistPage } from '../pages/playlist/playlist';
import { VodVideoPage } from '../pages/vod-video/vod-video';
import { DirectVideoPage } from '../pages/direct-video/direct-video';
import { VideoPage } from '../pages/video/video';

@NgModule({
  declarations: [
    MyApp,
    PlaylistPage,
    VideoPage,
    VodVideoPage,
    DirectPage,
    SearchPage,
    VodPage,
    ParticipatePage,
    DirectVideoPage,
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
    PlaylistPage,
    VideoPage,
    VodVideoPage,
    DirectPage,
    SearchPage,
    VodPage,
    ParticipatePage,
    DirectVideoPage,
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
