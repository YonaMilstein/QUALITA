import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DirectVideoPage } from '../direct-video/direct-video';
import { DirectAudioPage } from '../direct-audio/direct-audio';

@Component({
  selector: 'page-direct',
  templateUrl: 'direct.html'
})
export class DirectPage {

  constructor(public navCtrl: NavController) {

  }
  openDirectVideo() {
    this.navCtrl.push(DirectVideoPage);
    
  }
  openDirectAudio(){
    this.navCtrl.push(DirectAudioPage);
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectPage');
  }
}
