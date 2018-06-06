import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DirectVideoPage } from '../direct-video/direct-video';

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
  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectPage');
  }
  // ionViewDidEnter(){
  //   this.navCtrl.setRoot(DirectVideoPage);
  // }
}
