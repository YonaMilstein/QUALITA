
import { YtProvider } from './../../providers/yt/yt';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { VideoPage } from '../video/video';
 

@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  videos: Observable<any[]>;
 
  constructor(public navCtrl: NavController, private plt: Platform, private youtube: YoutubeVideoPlayer, public navParams: NavParams, private ytProvider: YtProvider) {
    let listId = this.navParams.get('id');
    this.videos = this.ytProvider.getListVideos(listId);
    this.videos.subscribe(data=> {
      console.log('video data: ', data);
    })
   
  }
 myVid="";
  openVideo(video) {
    this.myVid='https://www.youtube.com/embed/'+video.snippet.resourceId.videoId;
    this.navCtrl.push(VideoPage, {myVid: this.myVid});

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaylistPage');
  }
} 