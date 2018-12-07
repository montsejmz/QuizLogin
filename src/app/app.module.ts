import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {IonicStorageModule} from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgregarPage } from '../pages/agregar/agregar';
import { InicioPage } from '../pages/inicio/inicio';
import { CarritoPage } from '../pages/carrito/carrito';
import { MostrarPage } from '../pages/mostrar/mostrar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgregarPage,
    InicioPage,
    CarritoPage,
    MostrarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgregarPage,
    InicioPage,
    CarritoPage,
    MostrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
