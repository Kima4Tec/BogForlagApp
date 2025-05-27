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
export class PubService {
  private apiUrl = 'https://localhost:7279/api';

  constructor(private http: HttpClient) { }
}
