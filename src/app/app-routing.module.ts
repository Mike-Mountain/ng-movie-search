import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'results/:query', loadChildren: () => import('./modules/results/results.module').then(m => m.ResultsModule)},
  {path: 'details/:imdbId', loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
