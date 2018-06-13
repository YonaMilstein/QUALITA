import { PlaylistPage } from '../playlist/playlist';
import { YtProvider } from './../../providers/yt/yt';
import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-vod-video',
  templateUrl: 'vod-video.html',
})

export class VodVideoPage {
     channelId = 'UC4ZNntU3CyEIH8RGH0n_5bw';
     playlists: Observable<any[]>;

     constructor(public navCtrl: NavController, private ytProvider: YtProvider, private alertCtrl: AlertController) {
      this.searchPlaylists();
      }
 
     searchPlaylists() {
       this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
       this.playlists.subscribe(data => {
         console.log('playlists: ', data);
       }, err => {
         let alert = this.alertCtrl.create({
           title: 'Error',
           message: 'No Playlists found for that Channel ID',
           buttons: ['OK']
         });
         alert.present();
       })
     }
    
     openPlaylist(id) {
       this.navCtrl.push(PlaylistPage, {id: id});
     }
     
     //equivalent to onload fun
    //  ionViewDidLoad() { 
    //   this.searchPlaylists();
    // }
   }