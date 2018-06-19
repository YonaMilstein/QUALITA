
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class YtProvider {
  apiKey = 'AIzaSyCCB1jcQes4c5eYptSo40iDxnCFQg6ui74';

  constructor(public http: Http) { }
 
  getVideoFromChannel(channel, inputName, nextToken) {
    var token = '';
    if (nextToken != null)
    {
        token = '&pageToken=' + nextToken;
    }
    return new Promise((resolve, reject)=>{
      return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=50&q='+inputName+token )
      .subscribe((res) => {
        console.log("in provider",res.json())
        resolve({
          item: res.json()['items'],
          token: res.json()['nextPageToken']
        });
      })
    })
  }

  getPlaylistsForChannel(channel) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' + this.apiKey + '&channelId=' + channel + '&part=snippet,id&maxResults=50')
    .map((res) => {
      return res.json()['items'];
    })
  }
 
  getListVideos(listId, nextToken) {
    var token = '';
    if (nextToken != null)
    {
        token = '&pageToken=' + nextToken;
    }
    return new Promise((resolve, reject)=>{
      return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId +'&part=snippet,id&maxResults=50'+token)
       .subscribe((res) => {
      console.log("in provider",res.json())
      resolve({
        item: res.json()['items'],
        token: res.json()['nextPageToken']
        });
      })
    })
  }




}