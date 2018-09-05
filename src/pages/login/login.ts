import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreaTuCuentaPage } from '../crea-tu-cuenta/crea-tu-cuenta';
import { AprendeAReciclarJugandoPage } from '../aprende-areciclar-jugando/aprende-areciclar-jugando';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToCreaTuCuenta(params){
    if (!params) params = {};
    this.navCtrl.push(CreaTuCuentaPage);
  }
  goToTabsControllerPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TabsControllerPage);
  }
}
