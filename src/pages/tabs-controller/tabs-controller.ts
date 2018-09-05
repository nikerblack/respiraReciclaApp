import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoLoQuieresReciclaloPage } from '../no-lo-quieres-reciclalo/no-lo-quieres-reciclalo';
import { CreaTuPublicacionPage } from '../crea-tu-publicacion/crea-tu-publicacion';
import { IdeasReciclablesPage } from '../ideas-reciclables/ideas-reciclables';
import { DemustraTusIdeasPage } from '../demustra-tus-ideas/demustra-tus-ideas';
import { AprendeAReciclarJugandoPage } from '../aprende-areciclar-jugando/aprende-areciclar-jugando';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = NoLoQuieresReciclaloPage;
  tab2Root: any = AprendeAReciclarJugandoPage;
  tab3Root: any = IdeasReciclablesPage;
  constructor(public navCtrl: NavController) {
  }
  goToNoLoQuieresReciclalo(params){
    if (!params) params = {};
    this.navCtrl.push(NoLoQuieresReciclaloPage);
  }goToCreaTuPublicacion(params){
    if (!params) params = {};
    this.navCtrl.push(CreaTuPublicacionPage);
  }goToIdeasReciclables(params){
    if (!params) params = {};
    this.navCtrl.push(IdeasReciclablesPage);
  }goToDemustraTusIdeas(params){
    if (!params) params = {};
    this.navCtrl.push(DemustraTusIdeasPage);
  }
}
