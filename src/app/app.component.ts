import { Component } from '@angular/core';
import { fadeInAnimation } from "./_animations";
import { LINKS } from './_data/links';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private router: Router, private route: ActivatedRoute) {
   
    
  }

  ngOnInit() {
    // this should be a service
    // debugger
    // this.title = this.route
    // this.title = this.path.url
    this.router.events.subscribe((url:any) => 
    {
        // debugger
        if (url.snapshot) {
          if (url.snapshot.routeConfig) {
            this.title = url.snapshot.routeConfig.path;
          }
        }
        // if (url.routeConfig.path) {
          // debugger
        // }
        // this.title = url.snapshot.routeConfig.path
        // debugger
      }
    )
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // debugger
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
