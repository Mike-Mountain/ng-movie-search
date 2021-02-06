import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreakTitlePipe} from './pipes/break-title/break-title.pipe';
import {ToArrayPipe} from './pipes/to-array/to-array.pipe';


@NgModule({
  declarations: [
    ToArrayPipe,
    BreakTitlePipe
  ],
  exports: [
    ToArrayPipe,
    BreakTitlePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
