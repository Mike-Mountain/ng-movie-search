import {Component, OnInit} from '@angular/core';
import {LoadingService} from '../../services/loading/loading.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  public isLoading$: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading$ = loadingService.loading$();
  }

  ngOnInit(): void {
  }

}
