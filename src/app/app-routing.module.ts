import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleObservablesComponent } from './example-observables/example-observables.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: ExampleObservablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
