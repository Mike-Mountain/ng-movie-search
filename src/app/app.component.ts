import {Component, OnDestroy, OnInit} from '@angular/core';
import {UpdateService} from './modules/core/services/update.service';
import {Subscription} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public hasUpdate = false;
  private updateSubscription: Subscription | undefined;
  private errorSubscription: Subscription | undefined;

  constructor(private updateService: UpdateService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.updateSubscription = this.updateService.getHasUpdates().subscribe((update) => {
      if (update.available) {
        this.hasUpdate = true;
      }
    });
    this.errorSubscription = this.updateService.hasErrorState().subscribe(errorState => {
      this.toastr.error(`An error occurred that we cannot recover from:\n${errorState.reason}\n\n` +
        'Please reload the page.');
    });
  }

  ngOnDestroy(): void {
    this.updateSubscription?.unsubscribe();
    this.errorSubscription?.unsubscribe();
  }

  public updateApplication(): void {
    this.updateService.activateUpdate().then(() => document.location.reload());
  }
}
