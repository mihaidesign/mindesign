import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WebDesignComponent } from './components/portfolio/portfolio-categories/web-design/web-design.component';
import { PortfolioCategoryItemComponent } from './components/portfolio/portfolio-categories/portfolio-category-item/portfolio-category-item.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      {
        path: 'web-design',
        component: WebDesignComponent,
        children: [
          {
            path: ':name',
            component: PortfolioCategoryItemComponent
          }
        ]
      }
    ]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
