import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../shared/services/base-http.service';
import {SearchResultDetails} from '../models/searchResultDetails';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {ApiDetailsModel} from '../models/api-details-model.interface';

@Injectable({
  providedIn: 'root'
})
export class DetailsService extends BaseHttpService<SearchResultDetails> {

  public imdbIdSrc: string | undefined;
  private detailsSrc = new BehaviorSubject<SearchResultDetails | undefined>(undefined);
  public detailsStore = this.detailsSrc.asObservable();

  constructor(private http: HttpClient) {
    super(http);
  }

  getDetails(imdbId: string): Observable<SearchResultDetails> {
    const url = super.setUrl('i', imdbId);
    return super._get(url).pipe(
      tap(details => this.detailsSrc.next(details)),
      map(details => new SearchResultDetails(details as unknown as ApiDetailsModel)),
      catchError(err => {
        console.log(err);
        throw new Error();
      })
    );
  }

  public hasDetails(): boolean {
    return this.detailsSrc.getValue() !== undefined;
  }
}
