import { createAction, props } from '@ngrx/store';
import { Item } from '../interfaces/item.interface.interface';

export const fetchItems = createAction('[Item] Fetch Items');
export const fetchItemsSuccess = createAction(
  '[Item] Fetch Items Success',
  props<{ items: Item[] }>()
);
export const fetchItemsFailure = createAction(
  '[Item] Fetch Items Failure',
  props<{ error: any }>()
);

export const toggleDisplay = createAction(
  '[Item] Toggle Display',
  props<{ itemId: number }>()
);
