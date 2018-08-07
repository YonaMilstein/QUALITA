import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParticipatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-participate',
  templateUrl: 'participate.html',
})
export class ParticipatePage {

  exist = false
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.exist = true
    console.log('ionViewDidLoad ParticipatePage');
  }
  ionViewWillLeave() {
    this.exist = false
    console.log("left participate");

    //this.navCtrl.insert(1, ParticipatePage);
    ///this.navCtrl.pop();

  }
  ionViewDidEnter() {
    console.log("entered participate");
    if (!this.exist)
      this.navCtrl.setRoot(ParticipatePage);

  }
}
