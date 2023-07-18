import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/shared/interfaces/item.interface.interface';
import { toggleDisplay } from 'src/app/shared/state/item.actions';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() item!: Item;
  @Input() displayState!: string | null;

  constructor(private store: Store) {}

  toggleDisplay(itemId: number) {
    this.store.dispatch(toggleDisplay({ itemId }));
  }

  displayStateToClass(displayState: string | null): string {
    return `square__content--${displayState}`;
  }

  getItemCardContent(item: Item, displayState: string | null): string {
    if (displayState === 'title') {
      return item.title;
    } else if (displayState === 'userId') {
      return item.userId.toString();
    } else if (displayState === 'id') {
      return item.id.toString();
    } else if (displayState === 'body') {
      return item.body;
    } else {
      return '';
    }
  }
}
