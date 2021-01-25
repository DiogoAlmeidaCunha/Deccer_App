import { Input, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { OrcamentoPageComponent } from './orcamento-page/orcamento-page.component'
import { ServicoPageComponent } from './servico-page/servico-page.component';
import { PortofolioPageComponent } from './portofolio-page/portofolio-page.component';
import { CanalizacoesComponent } from './servico-page/services/canalizacoes/canalizacoes.component';
import { ExterioresComponent } from './servico-page/services/exteriores/exteriores.component';
import { TelhadosComponent } from './servico-page/services/telhados/telhados.component';

import { InterioresComponent } from './servico-page/services/interiores/interiores.component';




const routes: Routes = [
  { path: '', component : WelcomePageComponent},
  { path: 'orcamento' , component: OrcamentoPageComponent},
  { path: 'servico' , component: ServicoPageComponent},
  { path: 'servico/canalizacoes', component: CanalizacoesComponent},
  { path: 'servico/exteriores', component: ExterioresComponent},
  { path: 'servico/telhados', component: TelhadosComponent},
  { path: 'servico/interiores', component: InterioresComponent},
  { path: 'portofolio' , component: PortofolioPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
