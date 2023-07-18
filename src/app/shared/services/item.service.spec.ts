import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ItemService } from './item.service';
import { Item } from '../interfaces/item.interface.interface';

describe('ItemService', () => {
  let service: ItemService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemService],
    });
    service = TestBed.inject(ItemService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve items from the API', () => {
    const mockItems: Item[] = [
      { userId: 13, id: 15, title: 'Item 13', body: 'Body test for the fist' },
      { userId: 23, id: 211, title: 'Item 23', body: 'Body 2' },
    ];

    service.getItems().subscribe((items: Item[]) => {
      expect(items).toEqual(mockItems);
    });

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/posts'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should fetch ann item from the API', () => {
    const itemId = 1;
    const mockItem: Item = {
      userId: 1,
      id: 1,
      title: 'Item 1',
      body: 'Body 1',
    };

    service.getItem(itemId).subscribe((item: Item | undefined) => {
      expect(item).toEqual(mockItem);
    });

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/posts'
    );
    expect(req.request.method).toBe('GET');
    req.flush([mockItem]);
  });
});
