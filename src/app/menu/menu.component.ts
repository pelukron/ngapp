import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  template: `
    <header>
      <a href="#" class="button">Example 1</a>
      <a href="#" class="button">Example 2</a>
    </header>
  `,
})
export class MenuComponent {

}
