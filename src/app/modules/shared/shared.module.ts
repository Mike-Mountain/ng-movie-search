import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreakTitlePipe} from './pipes/break-title/break-title.pipe';
import {ToArrayPipe} from './pipes/to-array/to-array.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    ToArrayPipe,
    BreakTitlePipe,
    SpinnerComponent
  ],
  exports: [
    ToArrayPipe,
    BreakTitlePipe,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
