import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../shared/services/base-http.service';
import {ResultsList} from '../models/results.model';
import {HttpClient} from '@angular/common/http';
import {SearchType} from '../../shared/models/api-params.model';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {ApiResultsModel} from '../models/api-models.interface';

@Injectable({
  providedIn: 'root'
})
export class ResultsService extends BaseHttpService<ResultsList> {


  public searchQuerySrc: string | undefined;
  private resultsSrc = new BehaviorSubject<ResultsList | undefined>(undefined);
  public resultsStore = this.resultsSrc.asObservable();

  constructor(private http: HttpClient) {
    super(http);
  }

  public searchMedia(type: SearchType, query: string): Observable<ResultsList> {
    const url = super.setUrl(type, query);
    return super._get(url).pipe(
      tap(results => this.resultsSrc.next(results)),
      map(results => new ResultsList(results as unknown as ApiResultsModel)),
      catchError(err => {
        console.log(err);
        throw new Error();
      })
    );
  }

  public hasResults(): boolean {
    return this.resultsSrc.getValue() !== undefined;
  }
}
