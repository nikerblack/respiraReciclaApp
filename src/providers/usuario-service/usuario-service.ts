import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../app/usuario';
/*
  Generated class for the UsuarioServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioServiceProvider {

  private respiraReciclaURL = 'api/heroes';  // URL to web api

  constructor(public http: HttpClient) {
    console.log('Hello UsuarioServiceProvider Provider');
  }

  getUsuario (): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.respiraReciclaURL)
  }

}
