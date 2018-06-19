import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {SafePipe} from '../../app/pipes/safe';


/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
 
})
export class VideoPage {
 // vid="https://www.youtube.com/embed/L7S_a0EbODU";//test
  public x: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dom: DomSanitizer) {
    var myVid = this.navParams.get('myVid');
    console.log('video data: ', myVid); //test
    this.x=myVid;
    console.log('video data:test x ', this.x); //test
    //x= this.sanitize(myVid);
   // var x= "https://www.youtube.com/embed/L7S_a0EbODU";
  }
 
  sanitize(Vid){
    console.log('sanitizer vid: ', Vid); //test
   // console.log('sanitizer: ',this.dom.bypassSecurityTrustResourceUrl(Vid)); //test
     return this.dom.bypassSecurityTrustResourceUrl(Vid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

  ionViewDidLeave(){
   //let index= this.navCtrl.length;
   const myActualController = this.navCtrl.getActive();
   const pageIndex: number = this.navCtrl.indexOf(myActualController);
   this.navCtrl.remove(pageIndex);
    console.log("bitch");
  }
}
