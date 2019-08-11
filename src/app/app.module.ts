import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BLE } from '@ionic-native/ble/ngx';
import { File } from '@ionic-native/file/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';
import { MapContainerModule } from './map-container/map-container.module';
import { ConfigurationModule } from './configuration/configuration.module';

@NgModule({
  declarations: [AppComponent, NavigationDrawerComponent],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IonicModule.forRoot(),
    MapContainerModule,
    ConfigurationModule,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    BLE,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
