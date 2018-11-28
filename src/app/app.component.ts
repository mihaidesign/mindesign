import { Component } from '@angular/core';
import { fadeInAnimation } from "./_animations";
import { LINKS } from './_data/links';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AppComponent {
  title = 'mindesign';

  public links = LINKS;
  public isOpened = false;

  constructor(private router: Router, private path: ActivatedRoute) {
    this.router.events.subscribe((url:any) => 
      {
        console.log(url)
        if (url.NavigationEnd) {
          // debugger
        }
        // this.title = url.snapshot.routeConfig.path
        // debugger
      }
    )
    
  }

  ngOnInit() {
    // this should be a service
    // debugger
    // this.title = this.route
    // this.title = this.path.url
    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    debugger
  }

  toggleMenu() {
    this.isOpened = !this.isOpened;
  }

  onSelect() {
    this.toggleMenu();
  }

  log(o) {
    console.log(o);
  }
}
