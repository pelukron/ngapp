import {
  Component,
  inject,
} from '@angular/core';
import {
  AsyncPipe,
  NgFor,
  NgIf,
} from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
} from 'rxjs';
import {
  ob,
  TZelda,
} from './data';

type TFormGroup = { search: FormControl<string> };

type TListComponent = {
  searchForm: FormGroup<TFormGroup>;
  searchValue$: Observable<string>;
  list$: Observable<TZelda[]>;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ ReactiveFormsModule,NgIf, NgFor, AsyncPipe ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements TListComponent {
  private _formBuilder: FormBuilder = inject(FormBuilder)

  searchForm: FormGroup<TFormGroup> = this._formBuilder.nonNullable.group({
    search: [''],
  });

  searchValue$ = this.searchForm.controls.search.valueChanges.pipe(
    debounceTime(200),
    distinctUntilChanged(),
  );

  list$: Observable<TZelda[]> = of(ob)

}
