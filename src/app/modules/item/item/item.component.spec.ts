import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { ItemComponent } from './item.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { fetchItems } from 'src/app/shared/state/item.actions';
import {
  getItemEntities,
  getItemError,
  getItemLoading,
} from 'src/app/shared/state/item.selectors';
import { Observable, of } from 'rxjs';
import { Item } from 'src/app/shared/interfaces/item.interface.interface';
import { ItemCardComponent } from './item-card/item-card.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let store: MockStore;
  let mockItems$: Observable<Item[]>;
  let mockLoading$: Observable<boolean>;
  let mockError$: Observable<string | null>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent, ItemCardComponent],
      imports: [StoreModule.forRoot({})],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;

    const mockItems: Item[] = [
      { userId: 2, body: 'test for body', id: 1, title: 'Test Title' },
    ];
    mockItems$ = of(mockItems) as Observable<Item[]>;
    mockLoading$ = of(false) as Observable<boolean>;
    mockError$ = of(null) as Observable<string | null>;

    store.overrideSelector(getItemEntities, mockItems);
    store.overrideSelector(getItemLoading, false);
    store.overrideSelector(getItemError, null);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch fetchItems action on ngOnInit', () => {
    spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(fetchItems());
  });

  it('should display loading spinner when loading$ is true', () => {
    component.loading$ = of(true) as Observable<boolean>;
    fixture.detectChanges();
    const loadingSpinner =
      fixture.nativeElement.querySelector('.loading-spinner');
    expect(loadingSpinner).toBeTruthy();
    expect(loadingSpinner.textContent).toContain('🌀');
  });

  it('should display item cards when items$ has items', () => {
    component.items$ = mockItems$;
    fixture.detectChanges();
    const itemCards = fixture.nativeElement.querySelectorAll('app-item-card');
    expect(itemCards.length).toBe(1);
  });

  it('should display error message when error$ has error', () => {
    const errorMessage = 'Test Error';
    component.error$ = of(errorMessage) as Observable<string | null>;
    fixture.detectChanges();
    const errorElement = fixture.nativeElement.querySelector('.error');
    expect(errorElement).toBeTruthy();
    expect(errorElement.textContent).toContain(errorMessage);
  });
});
