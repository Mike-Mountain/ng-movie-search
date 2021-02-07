import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreakTitlePipe} from './pipes/break-title/break-title.pipe';
import {ToArrayPipe} from './pipes/to-array/to-array.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DefaultImagePipe } from './pipes/default-image/default-image.pipe';
import { BgImageDirective } from './directives/bg-image/bg-image.directive';


@NgModule({
  declarations: [
    ToArrayPipe,
    BreakTitlePipe,
    SpinnerComponent,
    DefaultImagePipe,
    BgImageDirective
  ],
  exports: [
    ToArrayPipe,
    BreakTitlePipe,
    SpinnerComponent,
    DefaultImagePipe,
    BgImageDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
