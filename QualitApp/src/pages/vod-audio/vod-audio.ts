import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VodAudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-vod-audio',
  templateUrl: 'vod-audio.html',
})
export class VodAudioPage {
  public myUrl: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myUrl="https://www.studioqualita.com/podcasts";
  }

  ionViewDidLeave(){
    this.navCtrl.pop();
  }
}
