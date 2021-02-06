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
        this.searchQuery = this.setSearchQuery(event.urlAfterRedirects);
      }
    });
  }

  public search(query: string): void {
    this.router.navigateByUrl(`results/${query}`);
  }

  public feelingLuckySearch(query: string): void {
    this.router.navigateByUrl(`details/${query}`);
  }

  private setSearchQuery(url: string): string {
    if (url.includes('results')) {
      // Grab the query string from the url and reformat
      const query = url.split('/')[2];
      const queryStrings = query.split('%20');
      return queryStrings.join(' ');
    } else if (url.includes('details')) {
      // TODO: Fetch the title from the details service
      return this.searchQuery || '';
    }
    return '';
  }

}
