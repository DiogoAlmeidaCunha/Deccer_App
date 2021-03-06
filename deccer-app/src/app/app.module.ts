import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

/* ALL NEW IMPORTS - FROM WEB MODULE */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { CarouselNavigationComponent } from './carousel-navigation/carousel-navigation.component';
import { CompServicoComponent } from './components/comp-servico/comp-servico.component';
import { OrcamentoPageComponent } from './orcamento-page/orcamento-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicoPageComponent } from './servico-page/servico-page.component';
import { PortofolioPageComponent } from './portofolio-page/portofolio-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CanalizacoesComponent } from './servico-page/services/canalizacoes/canalizacoes.component';
import { TelhadosComponent } from './servico-page/services/telhados/telhados.component';
import { ExterioresComponent } from './servico-page/services/exteriores/exteriores.component';
import { InterioresComponent } from './servico-page/services/interiores/interiores.component';
import { InstaPageComponent } from './insta-page/insta-page.component'


import AOS from 'aos';
AOS.init();


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    CarouselNavigationComponent,
    CompServicoComponent,
    OrcamentoPageComponent,
    FooterComponent,
    HeaderComponent,
    ServicoPageComponent,
    PortofolioPageComponent,
    CanalizacoesComponent,
    TelhadosComponent,
    ExterioresComponent,
    InterioresComponent,
    InstaPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    NgbModule,
    FontAwesomeModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
