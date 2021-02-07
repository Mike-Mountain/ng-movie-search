import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {DetailsService} from '../../../details/services/details.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() public isRouted: boolean | undefined;
  public searchQuery = '';

  private routerSubscription: Subscription | undefined;

  constructor(private router: Router,
              private detailsService: DetailsService) {
  }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.searchQuery = this.setSearchQuery(event.urlAfterRedirects);
      }
    });
  }

  public search(query: string): void {
    this.detailsService.searchType = 'id';
    this.router.navigate([`results/${query}`], {queryParams: {page: 1}});
  }

  public feelingLuckySearch(query: string): void {
    this.detailsService.searchType = 'title';
    this.router.navigateByUrl(`details/title/${query}`);
  }

  private setSearchQuery(url: string): string {
    if (url.includes('results')) {
      // Grab the query string from the url and reformat
      const fullString = url.split('/')[2];
      // Remove query params
      const query = fullString.split('?')[0];
      const queryStrings = query.split('%20');
      return queryStrings.join(' ');
    } else if (url.includes('details')) {
      if (!this.searchQuery) {
        const query = url.split('/')[4];
        const queryStrings = query.split('%20');
        this.searchQuery = queryStrings.join(' ');
      }
      return this.searchQuery;
    }
    return '';
  }

}
