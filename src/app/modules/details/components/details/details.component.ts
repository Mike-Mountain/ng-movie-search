import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {SearchResultDetails} from '../../models/searchResultDetails';
import {DetailsService} from '../../services/details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public details$: Observable<SearchResultDetails> | undefined;
  private paramSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute,
              private detailsService: DetailsService) {
  }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      if (this.detailsService.imdbIdSrc !== params.imdbId && this.detailsService.hasDetails()) {
        this.details$ = this.detailsService.detailsStore as Observable<SearchResultDetails>;
        this.detailsService.imdbIdSrc = params.imdbId;
      } else {
        this.details$ = this.detailsService.getDetails(params.imdbId);
      }
    });
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
  }

}
