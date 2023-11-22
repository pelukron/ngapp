import { Routes } from '@angular/router';
import { ExampleObservablesComponent } from './example-observables/example-observables.component';
import { ExampleSignalsComponent } from './example-signals/example-signals.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: ExampleObservablesComponent
  },
  {
    path: 'list2',
    component: ExampleSignalsComponent
  },
];
