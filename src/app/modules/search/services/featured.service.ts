import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../shared/services/base-http/base-http.service';
import {SearchResultDetails} from '../../details/models/searchResultDetails';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiDetailsModel} from '../../details/models/api-details-model.interface';
import {FeaturedModel} from '../models/featured.model';

@Injectable({
  providedIn: 'root'
})
export class FeaturedService extends BaseHttpService<SearchResultDetails> {

  constructor(private http: HttpClient) {
    super(http);
  }

  public getMovies(movies: FeaturedModel[]): Observable<SearchResultDetails[]> {
    const urls = movies.map(movie => super.setUrl('i', movie.imdbId));
    const sources = urls.map(url => super._get(url).pipe(map(item => new SearchResultDetails(item as unknown as ApiDetailsModel))));
    return forkJoin(sources);
  }

}
