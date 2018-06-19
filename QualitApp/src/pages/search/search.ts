import { Component } from '@angular/core';
import { NavController, AlertController, Platform, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { YtProvider } from './../../providers/yt/yt';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { VideoPage } from '../video/video';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  channelId = 'UC4ZNntU3CyEIH8RGH0n_5bw';
  videosResults: Observable<any[]>;
  
  constructor(public navCtrl: NavController, private plt: Platform, private youtube: YoutubeVideoPlayer, public navParams: NavParams, private ytProvider: YtProvider) { }
  flag:boolean = false;
  hide:boolean = true;
  hideSubjects() {
    this.hide = !this.hide;
  }

  hide2:boolean = false;
  hideResults(){
    this.hide2 = !this.hide2;
  }
  
  myVid="";
  openVideo(video) {
    this.myVid='https://www.youtube.com/embed/'+video.id.videoId;
    this.navCtrl.push(VideoPage, {myVid: this.myVid});
  }

  reload(){
    this.navCtrl.setRoot(SearchPage);
  }

  searchVideos(inputName) {
    if(inputName != null)
    {
      let listId = this.navParams.get('id');
      this.videosResults = this.ytProvider.getVideoFromChannel(this.channelId, inputName);
      this.videosResults.subscribe(data=> {
        console.log('video data: ', data);
      })
      if(!this.flag)
      {
          this.flag = true;
          this.hideSubjects();
          this.hideResults();
      }
    }
   }

   searchAndHide(input){
    this.flag = true;
    this.searchVideos(input);
    this.hideSubjects();
    this.hideResults();
   }
}
