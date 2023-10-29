import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NuestrosClientesComponent } from './nuestros-clientes/nuestros-clientes.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BordadosComponent } from './servicios/bordados/bordados.component';
import { SastreriaComponent } from './servicios/sastreria/sastreria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiciosComponent,
    NuestrosClientesComponent,
    QuienesSomosComponent,
    ContactoComponent,
    BordadosComponent,
    SastreriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
