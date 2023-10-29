import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NuestrosClientesComponent } from './nuestros-clientes/nuestros-clientes.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BordadosComponent } from './servicios/bordados/bordados.component';
import { SastreriaComponent } from './servicios/sastreria/sastreria.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'quienes-somos', component: QuienesSomosComponent},
  { path: 'nuestros-clientes', component: NuestrosClientesComponent},
  { path: 'servicios', component: ServiciosComponent,
    children: [
      { path: 'bordados', component: BordadosComponent},
      { path: 'sastreria', component: SastreriaComponent}
    ]
  },
  { path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
