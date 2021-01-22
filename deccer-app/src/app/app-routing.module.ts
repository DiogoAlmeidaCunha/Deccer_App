import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { OrcamentoPageComponent } from './orcamento-page/orcamento-page.component'
import { ServicoPageComponent } from './servico-page/servico-page.component';
import { PortofolioPageComponent } from './portofolio-page/portofolio-page.component';
import { CanalizacoesComponent } from './servico-page/services/canalizacoes/canalizacoes.component';
import { ExterioresComponent } from './servico-page/services/exteriores/exteriores.component';
import { FunilariasComponent } from './servico-page/services/funilarias/funilarias.component';




const routes: Routes = [
  { path: '', component : WelcomePageComponent},
  { path: 'orcamento' , component: OrcamentoPageComponent},
  { path: 'servico' , component: ServicoPageComponent},
  { path: 'servico/canalizacoes', component: CanalizacoesComponent},
  { path: 'servico/exteriores', component: ExterioresComponent},
  { path: 'servico/funilarias', component: FunilariasComponent},
  { path: 'portofolio' , component: PortofolioPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
