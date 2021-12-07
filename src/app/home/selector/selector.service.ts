import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectorService {
  constructor(private http: HttpClient) {}

  getNames() {
    return this.http.get('');
  }
}
