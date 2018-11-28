import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from 'src/app/_models/portfolio.item';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  item: PortfolioItem = {
    title : 'Title',
    description : 'giig',
    url : '/',
    img : 'assets/portfolio/img.jpg'
  }

  

  constructor() { }

  ngOnInit() {
    
  }

}
