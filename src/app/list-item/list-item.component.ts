import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Item} from '../models';

@Component({
  selector: 'hocus-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p [class.strike]="item.complete">
      {{item.text}}
    </p>
  `,
  styles: [`
    p {
      font-size: 1.5rem;
      cursor: pointer;
    }
    
    .strike {
        text-decoration: line-through;
    }
  `
  ]
})
export class ListItemComponent {
  @Input({required: true}) item!: Item;
}
