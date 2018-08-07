import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VodPage } from '../vod/vod';

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
  exist = false
  public myUrl: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myUrl="https://www.studioqualita.com/podcasts";
  }

  ionViewDidLoad() {
    this.exist = true
  }

  ionViewWillLeave() {
    this.exist = false
  }

  ionViewDidEnter() {
    if (!this.exist)
      this.navCtrl.setRoot(VodPage);

  }

}
