import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/_animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {

  index: number = 0
  public jobs: Array<string> = [ 'designer', 'web developer', 'photographer' ];
  public job: string = 'designer'

  constructor() {
    setInterval(_ => this.changeWord(), 2000);
  }

  ngOnInit() {
    
  }

  changeWord () {
    if (this.index === 0) {
      this.index = 1;
    } else if (this.index == 1) {
      this.index = 2;
    }
  }

}
