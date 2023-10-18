import {
    Component,
    Input,
} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import {
    ListShape,
} from './data';

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [NgIf, NgFor,],
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
