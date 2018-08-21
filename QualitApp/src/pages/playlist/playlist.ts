
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
  videos: any[];
 
  constructor(public navCtrl: NavController, private plt: Platform, private youtube: YoutubeVideoPlayer, public navParams: NavParams, private ytProvider: YtProvider) {
    this.getVideos();
  }

  rem(element, index, array){
    return (element.snippet.thumbnails !== undefined); //retirer video privee
  }

  async getVideos(){
    let listId = this.navParams.get('id');
    var res = await this.ytProvider.getListVideos(listId, null);
    this.videos = res['item'].filter(this.rem);
    var token = res['token'];


    while(token != undefined)
    {
      res = await this.ytProvider.getListVideos(listId, token);
      this.videos=this.videos.concat(res['item']);
      token = res['token'];

    }
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