import { Component } from '@angular/core';
import { DirectPage } from '../direct/direct';
import { SearchPage } from '../search/search';
import { VodPage } from '../vod/vod';
import { ParticipatePage } from '../participate/participate';
import { HttpClient } from '@angular/common/http';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
directPage=DirectPage;
searchPage=SearchPage;
vodPage=VodPage;
participatePage=ParticipatePage;

}
