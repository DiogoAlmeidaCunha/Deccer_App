import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

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

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    CarouselNavigationComponent,
    CompServicoComponent
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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
