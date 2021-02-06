import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() public isRouted: boolean | undefined;
  public searchQuery = '';

  private routerSubscription: Subscription | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Grab the query string from the url and reformat
        const query = event.urlAfterRedirects.split('/')[2];
        const queryStrings = query.split('%20');
        this.searchQuery = queryStrings.join(' ');
      }
    });
  }

  public search(query: string): void {
    this.router.navigateByUrl(`results/${query}`);
  }

  public feelingLuckySearch(query: string): void {
    this.router.navigateByUrl(`details/${query}`);
  }

}
