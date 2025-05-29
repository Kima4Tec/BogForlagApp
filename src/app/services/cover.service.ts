import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface CreateArtist {
  firstName: string;
  lastName: string;
}

export interface CreateCover {
  designIdeas: string;
  digitalOnly: boolean;
  bookid: number;
  artistIds: number[];
}

@Injectable({
  providedIn: 'root'
})
export class CoverService {
  private apiUrl = 'https://localhost:7279/api/cover';

  constructor(private http: HttpClient) { }

  createCover(cover: CreateCover): Observable<any> {
    return this.http.post(this.apiUrl, cover);
  }
}
