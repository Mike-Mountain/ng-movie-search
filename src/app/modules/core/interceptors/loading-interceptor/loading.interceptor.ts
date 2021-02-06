import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadingService} from '../../../shared/services/loading/loading.service';
import {map} from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.setIsLoading(true);
    return next.handle(request).pipe(
      map<HttpEvent<any>, any>((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loadingService.setIsLoading(false);
        }
        return event;
      })
    );
  }
}
