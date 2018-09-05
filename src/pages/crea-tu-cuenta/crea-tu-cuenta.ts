import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { Observable } from 'rxjs';
import { Usuario } from '../../app/usuario';

@Component({
  selector: 'page-crea-tu-cuenta',
  templateUrl: 'crea-tu-cuenta.html'
})
export class CreaTuCuentaPage {

  constructor(public navCtrl: NavController, private http: HttpClient) {
  }
  goToAppLoged(params){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MzYxOTc2MzF9.RWjC6fTMBLn5N_MA-Z_PnqZLxzCtKD52sgdqlFcqaBk'
    })

    if (!params) params = {};
    let usuario = this.http.get('https://respirarecicla.herokuapp.com/usuarios', { headers: headers })
    usuario.subscribe((a: Array<Usuario>)=>console.log(a))
    this.navCtrl.setRoot(TabsControllerPage);
  }

  
}
