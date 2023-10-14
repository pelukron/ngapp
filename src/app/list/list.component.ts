import {
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';

type TFormGroup = { search: FormControl<string> };

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  private _formBuilder: FormBuilder = inject(FormBuilder)

  searchForm: FormGroup<TFormGroup> = this._formBuilder.nonNullable.group({
    search: [''],
  });

  searchValue$ = this.searchForm.controls.search.valueChanges.pipe(
    debounceTime(200),
    distinctUntilChanged(),
  );

}
