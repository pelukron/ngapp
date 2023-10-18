import {
  Component,
  inject,
  OnDestroy,
  OnInit,
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
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import {
  ob,
  TZelda,
} from '../list/data';
import { ListComponent } from '../list/list.component';
import {
  takeUntilDestroyed,
  toSignal,
} from '@angular/core/rxjs-interop';
import { ListService } from '../list/list.service';

@Component({
  selector: 'app-example-signals',
  standalone: true,
  imports: [CommonModule, ListComponent, ReactiveFormsModule],
  templateUrl: './example-signals.component.html',
})
export class ExampleSignalsComponent implements OnInit, OnDestroy {
  private _formBuilder: FormBuilder = inject(FormBuilder)
  private _listService: ListService = inject(ListService);

  searchForm: FormGroup<TFormGroup> = this._formBuilder.nonNullable.group({
    search: [''],
  });

  defaultList: Signal<TZelda[]> = toSignal<TZelda[], TZelda[]>(
      this._listService.defaultList$, { initialValue: []}
  );

  filterList: Signal<TZelda[]> = toSignal<TZelda[], TZelda[]>(
      this._listService.filterList$, { initialValue: []}
  );

  ngOnInit() {
    this.searchForm.controls.search.valueChanges.pipe(
        debounceTime(400),
        distinctUntilChanged(),
        takeUntilDestroyed(),
    ).subscribe(value =>
        this._listService.searchText(value)
    );
  }

  ngOnDestroy() {
    this._listService.searchText('');
  }

}
