import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Artist {
  artistId: number;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apiUrl = 'https://localhost:7279/api';

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.apiUrl}/Artist`);
  }

  createArtists(artist: Partial<Artist>): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/Artist`, artist);
  }

  updateArtist(id: number, author: Artist) {
    return this.http.put(`${this.apiUrl}/Artist/${id}`, author);
  }

  deleteArtist(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Artist/${id}`);
  }
}
