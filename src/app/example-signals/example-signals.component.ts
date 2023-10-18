import {
  Component,
  inject,
  Signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TFormGroup,
  TListComponent,
} from '../example-observables/example-observables.component';
import {
  FormBuilder,
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
import {
  ob,
  TZelda,
} from '../list/data';
import { ListComponent } from '../list/list.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-example-signals',
  standalone: true,
  imports: [CommonModule, ListComponent, ReactiveFormsModule],
  templateUrl: './example-signals.component.html',
})
export class ExampleSignalsComponent implements  TListComponent{
  private _formBuilder: FormBuilder = inject(FormBuilder)

  searchForm: FormGroup<TFormGroup> = this._formBuilder.nonNullable.group({
    search: [''],
  });

  searchValue$: Observable<string> = this.searchForm.controls.search.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
  );

  defaultList$: Observable<TZelda[]> = of(ob);

  filterList$: Observable<TZelda[]> = combineLatest(
    [this.defaultList$, this.searchValue$]
  ).pipe(
      map(([list, text])=> {
        return list.filter( x => x.name.toLowerCase().includes(text.toLowerCase()))
      })
  );

  defaultList: Signal<TZelda[]> = toSignal<TZelda[], TZelda[]>(
      this.defaultList$, { initialValue: []}
  );

  filterList: Signal<TZelda[]> = toSignal<TZelda[], TZelda[]>(
      this.filterList$, { initialValue: []}
  );

}
