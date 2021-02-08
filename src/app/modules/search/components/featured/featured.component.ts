import {Component, OnDestroy, OnInit} from '@angular/core';
import {featuredMovies} from '../../constants/featured-data.const';
import {FeaturedService} from '../../services/featured.service';
import {FeaturedModel} from '../../models/featured.model';
import {SearchResultDetails} from '../../../details/models/searchResultDetails';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  public featuredMovies: FeaturedModel[] = featuredMovies;
  public movies: Observable<SearchResultDetails[]> | undefined;

  constructor(private featuredService: FeaturedService) {
  }

  ngOnInit(): void {
    this.movies = this.featuredService.getMovies(this.featuredMovies);
  }

}
