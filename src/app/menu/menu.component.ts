import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pure-menu pure-menu-horizontal">
      <a href="#" class="pure-menu-heading pure-menu-link">Example 1</a>
    </div>
  `,
})
export class MenuComponent {

}
