import {
    Component,
    Input,
} from '@angular/core';

import {
    ListShape,
} from './data';

@Component({
    selector: 'app-list',
    standalone: true,
    template: `
<nav>
  @for (item of defaultList; track item.id) {
    <a href="#"
      [id]="item.id">
      {{item.name}}
    </a>
  }
</nav>
`,
    styles: [],
})
export class ListComponent<TData> {

    @Input({required: true})
    defaultList!: ListShape<TData>[];

}
