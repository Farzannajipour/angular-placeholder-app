import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { ItemCardComponent } from './item-card.component';
import { toggleDisplay } from 'src/app/shared/state/item.actions';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Item } from 'src/app/shared/interfaces/item.interface.interface';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCardComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch toggleDisplay action on toggleDisplay method call', () => {
    const itemId = 1;
    spyOn(store, 'dispatch');
    component.toggleDisplay(itemId);
    expect(store.dispatch).toHaveBeenCalledWith(toggleDisplay({ itemId }));
  });

  it('should render item title when displayState is "title"', () => {
    const item: Item = {
      id: 1,
      title: 'Test Title',
      userId: 1,
      body: 'Test Body',
    };
    component.item = item;
    component.displayState = 'title';
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector(
      '.square__content--title'
    );
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toContain(item.title);
  });

  it('should render item userId when displayState is "userId"', () => {
    const item: Item = {
      id: 1,
      title: 'Test Title',
      userId: 1,
      body: 'Test Body',
    };
    component.item = item;
    component.displayState = 'userId';
    fixture.detectChanges();
    const userIdElement = fixture.nativeElement.querySelector(
      '.square__content--userId'
    );
    expect(userIdElement).toBeTruthy();
    expect(userIdElement.textContent).toContain(item.userId.toString());
  });

  it('should render item id when displayState is "id"', () => {
    const item: Item = {
      id: 1,
      title: 'Test Title',
      userId: 1,
      body: 'Test Body',
    };
    component.item = item;
    component.displayState = 'id';
    fixture.detectChanges();
    const idElement = fixture.nativeElement.querySelector(
      '.square__content--id'
    );
    expect(idElement).toBeTruthy();
    expect(idElement.textContent).toContain(item.id.toString());
  });

  it('should render item body when displayState is "body"', () => {
    const item: Item = {
      id: 1,
      title: 'Test Title',
      userId: 1,
      body: 'Test Body',
    };
    component.item = item;
    component.displayState = 'body';
    fixture.detectChanges();
    const bodyElement = fixture.nativeElement.querySelector(
      '.square__content--body'
    );
    expect(bodyElement).toBeTruthy();
    expect(bodyElement.textContent).toContain(item.body);
  });
});
