import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ItemState } from './item.reducers';

export const getItemState = createFeatureSelector<ItemState>('items');

export const getItemEntities = createSelector(
  getItemState,
  (state: ItemState) => state.items
);

export const getDisplayStates = createSelector(
  getItemState,
  (state: ItemState) => state.displayStates
);

export const getItemLoading = createSelector(
  getItemState,
  (state: ItemState) => state.loading
);

export const getItemError = createSelector(
  getItemState,
  (state: ItemState) => state.error
);
