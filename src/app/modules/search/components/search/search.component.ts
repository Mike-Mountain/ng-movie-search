import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {DetailsService} from '../../../details/services/details.service';
import {ToastrService} from 'ngx-toastr';

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
              private detailsService: DetailsService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.searchQuery = this.setSearchQuery(event.urlAfterRedirects);
      }
    });
  }

  public search(query: string): void {
    if (query.trim() !== '') {
      this.detailsService.searchType = 'id';
      this.router.navigate([`results/${query}`], {queryParams: {page: 1}});
    } else {
      this.toastr.error('Please enter a search query', '', {positionClass: 'toast-top-center'});
    }
  }

  public feelingLuckySearch(query: string): void {
    if (query.trim() !== '') {
      this.detailsService.searchType = 'title';
      this.router.navigateByUrl(`details/title/${query}`);
    } else {
      this.toastr.error('Please enter a search query', '', {positionClass: 'toast-top-center'});
    }
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
