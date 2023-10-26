import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <a href="#" class="button">Example 1</a>
      <a href="#" class="button">Example 2</a>
    </header>
  `,
})
export class MenuComponent {

}
