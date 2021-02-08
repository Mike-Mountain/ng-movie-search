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
  public tabs = ['Cast', 'Acclaim', 'More'];
  public currentTab = this.tabs[0];

  private paramSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute,
              private detailsService: DetailsService) {
  }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(params => {
      if (this.detailsService.searchType === 'id' && params.imdbId) {
        this.details$ = this.detailsService.getDetails(params.imdbId);
      } else {
        this.details$ = this.detailsService.feelinLucky(params.query);
      }
    });
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
  }

  public changeTab(tab: string, tabContent: Element): void {
    this.currentTab = tab;
    tabContent.scrollIntoView({behavior: 'smooth'});
  }
}
