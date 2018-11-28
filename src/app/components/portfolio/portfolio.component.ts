import { Component, OnInit } from '@angular/core';
import { PortfolioCategoryItem } from 'src/app/_models/portfolio.category.item';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  item: PortfolioCategoryItem = {
    title : 'Title',
    description : 'giig',
    url : '/',
    img : 'assets/portfolio/img.jpg'
  }

  

  constructor() { }

  ngOnInit() {
    
  }

}
