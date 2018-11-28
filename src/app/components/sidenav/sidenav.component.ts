import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LINKS } from 'src/app/_data/links';
import { fadeInAnimation } from 'src/app/_animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [fadeInAnimation],
})
export class SidenavComponent implements OnInit {

  public links = LINKS;

  @Input() isOpened: boolean;
  @Output() selected: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  select () {
    this.selected.emit(true);
  }

}
