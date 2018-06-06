
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class YtProvider {
  apiKey = 'AIzaSyCCB1jcQes4c5eYptSo40iDxnCFQg6ui74';
 
  constructor(public http: Http) { }
 
  getVideoFromChannel(channel, inputName) {
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=50&q='+inputName )
    .map((res) => {
      return res.json()['items'];
    })
  }

  getPlaylistsForChannel(channel) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=20')
    .map((res) => {
      return res.json()['items'];
    })
  }
 
  getListVideos(listId) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId +'&part=snippet,id&maxResults=20')
    .map((res) => {
      return res.json()['items'];
    })
  }
}