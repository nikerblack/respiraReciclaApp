import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule }    from '@angular/common/http';
import { MyApp } from './app.component';
import { AprendeAReciclarJugandoPage } from '../pages/aprende-areciclar-jugando/aprende-areciclar-jugando';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { NoLoQuieresReciclaloPage } from '../pages/no-lo-quieres-reciclalo/no-lo-quieres-reciclalo';
import { IdeasReciclablesPage } from '../pages/ideas-reciclables/ideas-reciclables';
import { CreaTuPublicacionPage } from '../pages/crea-tu-publicacion/crea-tu-publicacion';
import { DemustraTusIdeasPage } from '../pages/demustra-tus-ideas/demustra-tus-ideas';
import { LoginPage } from '../pages/login/login';
import { CreaTuCuentaPage } from '../pages/crea-tu-cuenta/crea-tu-cuenta';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioServiceProvider } from '../providers/usuario-service/usuario-service';

@NgModule({
  declarations: [
    MyApp,
    AprendeAReciclarJugandoPage,
    TabsControllerPage,
    NoLoQuieresReciclaloPage,
    IdeasReciclablesPage,
    CreaTuPublicacionPage,
    DemustraTusIdeasPage,
    LoginPage,
    CreaTuCuentaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AprendeAReciclarJugandoPage,
    TabsControllerPage,
    NoLoQuieresReciclaloPage,
    IdeasReciclablesPage,
    CreaTuPublicacionPage,
    DemustraTusIdeasPage,
    LoginPage,
    CreaTuCuentaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioServiceProvider
  ]
})
export class AppModule {}