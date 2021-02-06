import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { ResultListItemComponent } from './components/result-list-item/result-list-item.component';


@NgModule({
  declarations: [ResultsListComponent, ResultListItemComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule
  ]
})
export class ResultsModule { }
