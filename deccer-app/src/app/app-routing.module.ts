import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { OrcamentoPageComponent } from './orcamento-page/orcamento-page.component'

const routes: Routes = [
  { path: '', component : WelcomePageComponent},
  { path: 'orcamento' , component: OrcamentoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
