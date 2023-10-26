import { Injectable } from '@angular/core';
import {
  combineLatest,
  map,
  Observable,
  of,
  Subject,
} from 'rxjs';
import {
  ob,
  TZelda,
} from './data';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private searchValueSubject = new Subject<string>();

  searchValue$ = this.searchValueSubject.asObservable();

  defaultList$: Observable<TZelda[]> = of(ob);

  filterList$: Observable<TZelda[]> = combineLatest(
      [this.defaultList$, this.searchValue$]
  ).pipe(
      map(([list, text])=> {
        return !text ? list : list.filter( x => x.name.toLowerCase().includes(text.toLowerCase()))
      })
  );

  searchText(text: string) {
    this.searchValueSubject.next(text);
  }

}
