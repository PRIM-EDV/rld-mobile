import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';
import { MapModule } from './map/map.module';
import { BLE } from '@ionic-native/ble/ngx';

@NgModule({
  declarations: [AppComponent, NavigationDrawerComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MapModule],
  providers: [
    StatusBar,
    SplashScreen,
    BLE,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
