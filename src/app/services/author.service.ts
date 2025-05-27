import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'https://localhost:7279/api';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.apiUrl}/Author`);
  }

  createAuthor(author: Partial<Author>): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/Author`, author);
  }

  updateAuthor(id: number, author: Author) {
    return this.http.put(`${this.apiUrl}/Author/${id}`, author);
  }

  deleteAuthor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Author/${id}`);
  }
}
