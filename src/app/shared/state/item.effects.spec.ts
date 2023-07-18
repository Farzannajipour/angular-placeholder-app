import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { ItemEffects } from './item.effects';
import * as ItemActions from './item.actions';
import { ItemService } from '../services/item.service';
import { Item } from '../interfaces/item.interface.interface';

describe('ItemEffects', () => {
  let actions$: Observable<any>;
  let effects: ItemEffects;
  let itemService: jasmine.SpyObj<ItemService>;

  beforeEach(() => {
    const itemServiceSpy = jasmine.createSpyObj('ItemService', ['getItems']);
    
    TestBed.configureTestingModule({
      providers: [
        ItemEffects,
        provideMockActions(() => actions$),
        { provide: ItemService, useValue: itemServiceSpy },
      ],
    });

    effects = TestBed.inject(ItemEffects);
    itemService = TestBed.inject(ItemService) as jasmine.SpyObj<ItemService>;
  });

  it('should fetch items successfully', () => {
    const mockItems: Item[] = [
      { id: 1, title: 'Item 1', userId: 1, body: 'Body 1' },
      { id: 2, title: 'Item 2', userId: 2, body: 'Body 2' },
    ];
    itemService.getItems.and.returnValue(of(mockItems));

    actions$ = of(ItemActions.fetchItems());

    effects.fetchItems$.subscribe((resultAction) => {
      expect(resultAction).toEqual(ItemActions.fetchItemsSuccess({ items: mockItems }));
    });
  });

  it('should handle error when fetching items', () => {
    const errorMessage = 'Failed to fetch items';
    itemService.getItems.and.returnValue(throwError(() => new Error(errorMessage)));

    actions$ = of(ItemActions.fetchItems());

    effects.fetchItems$.subscribe((resultAction) => {
      expect(resultAction).toEqual(ItemActions.fetchItemsFailure({ error: errorMessage }));
    });
  });
});
