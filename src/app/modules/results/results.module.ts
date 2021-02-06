import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { ResultListItemComponent } from './components/result-list-item/result-list-item.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ResultsListComponent, ResultListItemComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    SharedModule
  ]
})
export class ResultsModule { }
