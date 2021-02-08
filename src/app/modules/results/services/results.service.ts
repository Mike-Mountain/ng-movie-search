import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../shared/services/base-http/base-http.service';
import {ResultsList} from '../models/results.model';
import {HttpClient} from '@angular/common/http';
import {SearchType} from '../../shared/models/api-params.model';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ApiResultsModel} from '../models/api-models.interface';

@Injectable({
  providedIn: 'root'
})
export class ResultsService extends BaseHttpService<ResultsList> {

  public currentPage = 1;

  constructor(private http: HttpClient) {
    super(http);
  }

  public get page(): number {
    return this.currentPage;
  }

  public set page(value: number) {
    this.currentPage = value;
  }

  public searchMedia(type: SearchType, query: string, page?: number): Observable<ResultsList> {
    let url: string;
    if (page) {
      url = super.setUrl(type, query, page);
    } else {
      url = super.setUrl(type, query);
    }
    return super._get(url).pipe(
      map(results => new ResultsList(results as unknown as ApiResultsModel)),
      catchError(err => {
        console.log(err);
        throw new Error();
      })
    );
  }
}
