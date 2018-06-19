import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RadioPlayer } from './../../providers/radio/radio';

/**
 * Generated class for the DirectAudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-direct-audio',
  templateUrl: 'direct-audio.html',
  providers: [RadioPlayer]
})
export class DirectAudioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public player: RadioPlayer) {
  }

  play() {
    this.player.play().then(() => {
      console.log('Playing');
    });
  }

  pause() {
    this.player.pause();
    console.log('Pause')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectAudioPage');
  }

  ionViewDidLeave()
  {
    this.pause();
  }
}
