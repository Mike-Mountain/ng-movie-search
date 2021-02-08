import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from '@angular/forms';
import { FeaturedComponent } from './components/featured/featured.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [SearchComponent, FeaturedComponent],
    exports: [
        SearchComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class SearchModule { }
