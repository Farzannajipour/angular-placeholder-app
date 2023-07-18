import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ItemActions from './item.actions';
import { ItemService } from '../services/item.service';

@Injectable()
export class ItemEffects {
  constructor(private actions$: Actions, private itemService: ItemService) {}

  fetchItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.fetchItems),
      mergeMap(() =>
        this.itemService.getItems().pipe(
          map((items) => ItemActions.fetchItemsSuccess({ items })),
          catchError((error) =>
            of(ItemActions.fetchItemsFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
