import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Item } from '../interfaces/item.interface.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  getItem(itemId: number): Observable<Item | undefined> {
    return this.http
      .get<Item[]>(this.apiUrl)
      .pipe(map((items: Item[]) => items.find((item) => item.id === itemId)));
  }
}
