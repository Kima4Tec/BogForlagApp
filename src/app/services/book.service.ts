import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Book {
  bookId: number;
  title: string;
  publishYear: number;
  basePrice: number;
  authorId: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://localhost:7279/api';

  constructor(private http: HttpClient) { }

  createBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/book`, newBook);
  }


}
