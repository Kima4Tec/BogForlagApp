import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

export interface Book {
  bookId: number;
  title: string;
  publishDate: number;
  price: number;
  cover?: any;
  authorId: number;
}
export interface Artist {
  artistId: number;
  firstName: string;
  lastName: string;
}

export interface ViewBook {
  bookId: number;
  title: string;
  publishDate: number;
  price: number;

  // Author info
  authorId?: number; // valgfri, da det kan være null
  authorFirstName: string;
  authorLastName: string;

  // Cover info
  designIdeas: string;
  coverIsDigital: boolean;

  // Liste over kunstnere til omslaget
  coverArtists: Artist[];
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://localhost:7279/api';
  private searchQuerySubject = new Subject<string>();
  seachQuery$ = this.searchQuerySubject.asObservable();

  constructor(private http: HttpClient) { }

  createBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/Book`, newBook);
  }
  getBooks(): Observable<ViewBook[]> {
    return this.http.get<ViewBook[]>(`${this.apiUrl}/Book`);
  }
  getBooksWithoutCover(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/Book/books-without-cover`);
  }
  getBookById(id: number): Observable<ViewBook> {
    return this.http.get<ViewBook>(`${this.apiUrl}/Book/${id}`);
  }
  getBooksBySearch(query: string): Observable<ViewBook[]> {
    return this.http.get<ViewBook[]>(`${this.apiUrl}/Book/search?query=${encodeURIComponent(query)}`);
  }
  updateBook(book: ViewBook): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/Book/${book.bookId}`, book);
  }
  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.apiUrl}/Book/${id}`);
  }

}
