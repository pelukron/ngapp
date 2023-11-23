import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <a routerLink="/list" class="button">Example 1</a>
      <a routerLink="/list2" class="button">Example 2</a>
    </header>
  `,
})
export class MenuComponent {

}
