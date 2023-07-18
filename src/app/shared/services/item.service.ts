import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Item } from '../interfaces/item.interface.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private cachedItems: Item[] = [];

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    if (this.cachedItems.length > 0) {
      return of(this.cachedItems);
    } else {
      return this.http.get<Item[]>(this.apiUrl).pipe(
        tap((items) => {
          this.cachedItems = items.slice(0, 100);
        })
      );
    }
  }

  getItem(itemId: number): Observable<Item | undefined> {
    if (this.cachedItems.length > 0) {
      return of(this.cachedItems.find((item) => item.id === itemId));
    } else {
      return this.getItems().pipe(
        map((items: any[]) => items.find((item) => item.id === itemId))
      );
    }
  }
}
