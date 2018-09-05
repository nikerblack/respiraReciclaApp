import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DemustraTusIdeasPage } from '../demustra-tus-ideas/demustra-tus-ideas';

@Component({
  selector: 'page-ideas-reciclables',
  templateUrl: 'ideas-reciclables.html'
})
export class IdeasReciclablesPage {

  constructor(public navCtrl: NavController) {
  }
  goToDemustraTusIdeas(params){
    if (!params) params = {};
    this.navCtrl.push(DemustraTusIdeasPage);
  }
}
