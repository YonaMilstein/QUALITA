import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VodVideoPage } from '../vod-video/vod-video';

/**
 * Generated class for the VodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-vod',
  templateUrl: 'vod.html',
})
export class VodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openVodVideo() {
    this.navCtrl.push(VodVideoPage);
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VodPage');
  }
  
}
