import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreaTuPublicacionPage } from '../crea-tu-publicacion/crea-tu-publicacion';

@Component({
  selector: 'page-no-lo-quieres-reciclalo',
  templateUrl: 'no-lo-quieres-reciclalo.html'
})
export class NoLoQuieresReciclaloPage {

  constructor(public navCtrl: NavController) {
  }
  goToCreaTuPublicacion(params){
    if (!params) params = {};
    this.navCtrl.push(CreaTuPublicacionPage);
  }
}
