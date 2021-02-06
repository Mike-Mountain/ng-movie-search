import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DetailsComponent} from './components/details/details.component';

const routes: Routes = [
  {path: 'id/:imdbId/:query', component: DetailsComponent},
  {path: 'title/:query', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule {
}
