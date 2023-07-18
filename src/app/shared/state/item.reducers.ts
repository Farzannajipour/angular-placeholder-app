import { createReducer, on } from '@ngrx/store';
import { Item } from '../interfaces/item.interface.interface';
import * as ItemActions from './item.actions';
import { DisplayStateService } from '../services/display/display-state.service';
import { Injector } from '@angular/core';

export interface ItemState {
  items: Item[];
  displayStates: { [itemId: number]: string };
  loading: boolean;
  error: string | null;
}

export const initialState: ItemState = {
  items: [],
  displayStates: {},
  loading: false,
  error: null,
};

const injector = Injector.create({
  providers: [{ provide: DisplayStateService, useClass: DisplayStateService }],
});

export const itemReducer = createReducer(
  initialState,
  on(ItemActions.fetchItems, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ItemActions.fetchItemsSuccess, (state, { items }) => {
    const displayStates: { [itemId: number]: string } = {};
    items.forEach((item) => {
      displayStates[item.id] = 'title';
    });

    return {
      ...state,
      items,
      displayStates,
      loading: false,
      error: null,
    };
  }),
  on(ItemActions.fetchItemsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(ItemActions.toggleDisplay, (state, { itemId }) => {
    const currentDisplayState = state.displayStates[itemId];
    const displayStateService = injector.get(DisplayStateService);
    const nextDisplayState =
      displayStateService.getNextDisplayState(currentDisplayState);

    return {
      ...state,
      displayStates: {
        ...state.displayStates,
        [itemId]: nextDisplayState,
      },
    };
  })
);
