import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule, MatButtonModule, MatListModule, MatIconModule } from '@angular/material';
import { LinkComponent } from './components/sidenav/link/link.component';
import { LogoComponent } from './components/_logo/logo.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioItemComponent } from './components/portfolio/portfolio-item/portfolio-item.component';
import { PortfolioCategoriesComponent } from './components/portfolio/portfolio-categories/portfolio-categories.component';
import { WebDesignComponent } from './components/portfolio/portfolio-categories/web-design/web-design.component';
import { PortfolioCategoryItemComponent } from './components/portfolio/portfolio-categories/portfolio-category-item/portfolio-category-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
    SidenavComponent,
    LinkComponent,
    LogoComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    PortfolioCategoriesComponent,
    WebDesignComponent,
    PortfolioCategoryItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
