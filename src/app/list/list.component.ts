import {
    Component,
    Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    ListShape,
} from './data';

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [CommonModule],
    template: `
        <nav>
            <ng-container
              *ngIf="defaultList.length">
                <a href="#"
                 *ngFor="let item of defaultList"
                 [id]="item.id">
                  {{item.name}}
                </a>
            </ng-container>
        </nav>
    `,
    styles: [],
})
export class ListComponent<TData> {

    @Input({required: true})
    defaultList!: ListShape<TData>[];

}
