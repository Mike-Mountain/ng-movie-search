import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ResultsService} from '../../services/results.service';
import {ResultsList} from '../../models/results.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit, OnDestroy {

  public results$: Observable<ResultsList> | undefined;
  private paramSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute,
              private resultsService: ResultsService) {
  }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      // TODO: Using the store to save the results of previous searches seems to break the UI when going back
      // if (this.resultsService.searchQuerySrc !== params.query && this.resultsService.hasResults()) {
      //   this.results$ = this.resultsService.resultsStore as Observable<ResultsList>;
      //   console.log(this.results$);
      //   this.resultsService.searchQuerySrc = params.query;
      // } else {
        this.results$ = this.resultsService.searchMedia('s', params.query);
      // }
    });
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
  }

}
