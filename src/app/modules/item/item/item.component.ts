import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchItems } from 'src/app/shared/state/item.actions';
import {
  getItemEntities,
  getItemLoading,
  getItemError,
} from 'src/app/shared/state/item.selectors';
import { Observable, map } from 'rxjs';
import { getDisplayStates } from 'src/app/shared/state/item.selectors';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  items$!: Observable<any>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(fetchItems());
    this.items$ = this.store.select(getItemEntities);
    this.loading$ = this.store.select(getItemLoading);
    this.error$ = this.store.select(getItemError);
  }

  getDisplayState(itemId: number): Observable<string | null> {
    return this.store
      .select(getDisplayStates)
      .pipe(map((displayStates) => displayStates[itemId] ?? null));
  }
}
