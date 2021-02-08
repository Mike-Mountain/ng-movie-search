import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {LoadingService} from '../../../shared/services/loading/loading.service';
import {catchError, map, tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService,
              private toastr: ToastrService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.setIsLoading(true);
    return next.handle(request).pipe(
      tap(response => {
        response = response as HttpResponse<any>;
        if (response.body?.Error) {
          this.toastr.error(response.body.Error);
        }
      }),
      map<HttpEvent<any>, any>((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.loadingService.setIsLoading(false);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.toastr.error(error.message, error.name);
        return throwError(error);
      })
    );
  }
}
