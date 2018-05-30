import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer}  from '@angular/platform-browser';
/**
 * Generated class for the DirectVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-direct-video',
  templateUrl: 'direct-video.html',
})
export class DirectVideoPage {
  //vid= "https://www.youtube.com/embed/LPN92rsPK_A";
  vid= "https://www.youtube.com/embed/L7S_a0EbODU";
  constructor(public navCtrl: NavController, public navParams: NavParams, private dom: DomSanitizer) {
  }

  sanitize(vid){
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectVideoPage');
  }

}
