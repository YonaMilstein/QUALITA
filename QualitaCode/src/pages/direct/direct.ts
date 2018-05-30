import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer}  from '@angular/platform-browser';
/**
 * Generated class for the DirectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-direct',
  templateUrl: 'direct.html',
})
export class DirectPage {
  vid= "https://www.youtube.com/embed/LPN92rsPK_A";
  constructor(public navCtrl: NavController, public navParams: NavParams, private dom: DomSanitizer) {
  }

  sanitize(vid){
    return this.dom.bypassSecurityTrustResourceUrl(vid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectPage');
  }

  

}
