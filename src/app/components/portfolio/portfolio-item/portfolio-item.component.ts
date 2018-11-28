import { Component, OnInit, Input } from '@angular/core';
import { PortfolioItem } from 'src/app/_models/portfolio.item';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  @Input() item: PortfolioItem

  constructor() { }

  ngOnInit() {
  }

}
