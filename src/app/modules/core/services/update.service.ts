import {ApplicationRef, Injectable} from '@angular/core';
import {SwUpdate, UnrecoverableStateEvent, UpdateAvailableEvent} from '@angular/service-worker';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private appRef: ApplicationRef,
              private updates: SwUpdate) {
  }

  public getHasUpdates(): Observable<UpdateAvailableEvent> {
    return this.updates.available;
  }

  public hasErrorState(): Observable<UnrecoverableStateEvent> {
    return this.updates.unrecoverable;
  }

  public activateUpdate(): Promise<any> {
    return this.updates.activateUpdate();
  }
}
