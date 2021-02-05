import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

type SearchType = 'i' | 't' | 's';
// TODO: Add search parameters for better search experience.
type mediaType = 'movie' | 'series' | 'episode';
type plotType = 'short' | 'full';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService<T> {

  private readonly apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public setUrl(type: SearchType, query: string): string {
    return `${environment.apiUrl}&${type}=${query}`;
  }

  public setHeaders(headers: {}): HttpHeaders {
    return new HttpHeaders(headers);
  }

  private _get(url: string, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.get<T>(url, {headers});
  }

  private _put(url: string, item: T, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.put<T>(url, item, {headers});
  }

  private _post(url: string, item: T, headers?: HttpHeaders): Observable<T> {
    return this.httpClient.post<T>(url, item, {headers});
  }

  private _delete(url: string): Observable<T | undefined> {
    return this.httpClient.delete<T>(url);
  }
}
