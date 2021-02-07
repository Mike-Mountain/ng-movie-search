import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreakTitlePipe} from './pipes/break-title/break-title.pipe';
import {ToArrayPipe} from './pipes/to-array/to-array.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DefaultImagePipe } from './pipes/default-image/default-image.pipe';


@NgModule({
  declarations: [
    ToArrayPipe,
    BreakTitlePipe,
    SpinnerComponent,
    DefaultImagePipe
  ],
  exports: [
    ToArrayPipe,
    BreakTitlePipe,
    SpinnerComponent,
    DefaultImagePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
