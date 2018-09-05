import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NoLoQuieresReciclaloPage } from '../pages/no-lo-quieres-reciclalo/no-lo-quieres-reciclalo';
import { CreaTuPublicacionPage } from '../pages/crea-tu-publicacion/crea-tu-publicacion';
import { IdeasReciclablesPage } from '../pages/ideas-reciclables/ideas-reciclables';
import { DemustraTusIdeasPage } from '../pages/demustra-tus-ideas/demustra-tus-ideas';
import { LoginPage } from '../pages/login/login';

import { AprendeAReciclarJugandoPage } from '../pages/aprende-areciclar-jugando/aprende-areciclar-jugando';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToNoLoQuieresReciclalo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NoLoQuieresReciclaloPage);
  }goToCreaTuPublicacion(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CreaTuPublicacionPage);
  }goToAprendeAReciclarJugando(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AprendeAReciclarJugandoPage);
  }goToIdeasReciclables(params){
    if (!params) params = {};
    this.navCtrl.setRoot(IdeasReciclablesPage);
  }goToDemustraTusIdeas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DemustraTusIdeasPage);
  }
}
