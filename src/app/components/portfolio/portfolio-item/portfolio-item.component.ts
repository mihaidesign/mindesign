import { Component, OnInit, Input } from '@angular/core';
import { PortfolioCategoryItem } from 'src/app/_models/portfolio.category.item';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  @Input() item: PortfolioCategoryItem

  constructor() { }

  ngOnInit() {
  }

}
