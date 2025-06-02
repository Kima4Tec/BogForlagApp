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
  bookid: number | null;
  artistIds: number[];
}

export interface Cover {
  coverId: number;
  designIdeas: string;
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

  updateCover(id: number, cover: Cover) {
    return this.http.put(`${this.apiUrl}/${id}`, cover)
  }
  getCovers(): Observable<Cover[]> {
    return this.http.get<Cover[]>(`${this.apiUrl}`);
  }
  getCoverById(id: number): Observable<Cover> {
    return this.http.get<Cover>(`${this.apiUrl}/${id}`);
  }
  deleteCover(id:number): Observable<Cover> {
    return this.http.delete<Cover>(`${this.apiUrl}/${id}`);
  }
}
