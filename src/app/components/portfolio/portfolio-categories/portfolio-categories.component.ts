import { Component, OnInit } from '@angular/core';
import { PORTFOLIO_CATEGORIES } from 'src/app/_data/portfolio-categories';
import { PortfolioCategory } from 'src/app/_models/portfolio.category';

@Component({
  selector: 'app-portfolio-categories',
  templateUrl: './portfolio-categories.component.html',
  styleUrls: ['./portfolio-categories.component.scss']
})
export class PortfolioCategoriesComponent implements OnInit {

  public categories: Array<PortfolioCategory> = PORTFOLIO_CATEGORIES;
  constructor() {}

  ngOnInit() {
  
    console.log(this.categories)
  }
}
