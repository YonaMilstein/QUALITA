import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';



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
  public x: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dom: DomSanitizer) {
    var myVid = this.navParams.get('myVid');
    this.x=myVid;
  }
 
  sanitize(Vid){
     return this.dom.bypassSecurityTrustResourceUrl(Vid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

  ionViewDidLeave(){
   const myActualController = this.navCtrl.getActive();
   const pageIndex: number = this.navCtrl.indexOf(myActualController);
  if(pageIndex<=1){
    this.navCtrl.popToRoot();
  }
  else{
    this.navCtrl.remove(pageIndex);
  }
  
  }
}
