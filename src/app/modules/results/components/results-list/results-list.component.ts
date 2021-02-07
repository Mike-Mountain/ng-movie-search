import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ResultsService} from '../../services/results.service';
import {ResultsList} from '../../models/results.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit, OnDestroy {

  public results$: Observable<ResultsList> | undefined;
  public searchQuery = '';
  public currentPage = 1;
  public results: ResultsList | undefined;

  private paramSubscription: Subscription | undefined;
  private queryParamSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private resultsService: ResultsService) {
  }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      this.queryParamSubscription = this.route.queryParams.subscribe(queryParams => {
        // HTTP Observables complete after they emit once, no need to unsubscribe.
        this.resultsService.searchMedia('s', params.query, queryParams.page).subscribe(results => {
          this.results = results;
          this.searchQuery = params.query;
          this.currentPage = parseInt(queryParams.page, 10);
        });
        // TODO: Using the store to save the results of previous searches seems to break the UI when going back
        // if (this.resultsService.searchQuerySrc !== params.query && this.resultsService.hasResults()) {
        //   this.results$ = this.resultsService.resultsStore as Observable<ResultsList>;
        //   console.log(this.results$);
        //   this.resultsService.searchQuerySrc = params.query;
        // } else {
        // this.searchQuery = params.query;
        // this.results$ = this.resultsService.searchMedia('s', params.query, queryParams.page);
        // this.currentPage = parseInt(queryParams.page, 10);
        // }
      });
    });
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.queryParamSubscription?.unsubscribe();
  }

  public updatePage(page: number): void {
    // this.results$ = this.resultsService.getNewPage(page, this.searchQuery);
    this.router.navigate([], {queryParams: {page}});
  }
}
