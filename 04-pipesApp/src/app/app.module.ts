import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//CAMBIAR EL LOCALE DE APP
import localEsPe from '@angular/common/locales/es-PE';
import localFra from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEsPe);
registerLocaleData(localFra);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [{provide:LOCALE_ID,useValue:'es-PE' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
