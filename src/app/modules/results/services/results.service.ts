import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../shared/services/base-http.service';
import {ResultsList} from '../models/results.model';
import {HttpClient} from '@angular/common/http';
import {SearchType} from '../../shared/models/api-params.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ApiResultsModel} from '../models/api-models.interface';

@Injectable({
  providedIn: 'root'
})
export class ResultsService extends BaseHttpService<ResultsList> {


  private resultsSrc = new BehaviorSubject<ResultsList | undefined>(undefined);
  public resultsStore = this.resultsSrc.asObservable();
  public searchQuerySrc: string | undefined;

  constructor(private http: HttpClient) {
    super(http);
  }

  public searchMedia(type: SearchType, query: string): Observable<ResultsList> {
    const url = super.setUrl(type, query);
    return super._get(url).pipe(
      // TODO: Store results in memory
      tap(results => console.log(results)),
      map(results => new ResultsList(results as unknown as ApiResultsModel))
    );
  }

  public hasResults(): boolean {
    return this.resultsSrc.getValue() !== undefined;
  }
}
