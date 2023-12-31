import {
  Component,
  inject,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
} from 'rxjs';

import { ListComponent } from '../list/list.component';
import {
  ob,
  TZelda,
} from '../list/data';

export type TFormGroup = { search: FormControl<string> };

export type TListComponent = {
  searchForm: FormGroup<TFormGroup>;
  searchValue$: Observable<string>;
}

@Component({
  selector: 'app-example-observables',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, ListComponent],
  templateUrl: './example-observables.component.html',
  styles: [],
})
export class ExampleObservablesComponent implements TListComponent {
  private _formBuilder: FormBuilder = inject(FormBuilder)

  searchForm: FormGroup<TFormGroup> = this._formBuilder.nonNullable.group({
    search: [''],
  });

  searchValue$: Observable<string> = this.searchForm.controls.search.valueChanges.pipe(
    debounceTime(400),
    distinctUntilChanged(),
  );

  defaultList$: Observable<TZelda[]> = of(ob);

  filterList$: Observable<TZelda[]> = combineLatest([this.defaultList$, this.searchValue$]).pipe(
      map(([list, text])=> {
        return list.filter( x => x.name.toLowerCase().includes(text.toLowerCase()))
      })
  )


}
