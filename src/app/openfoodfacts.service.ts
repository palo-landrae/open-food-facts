import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class OpenfoodfactsService {
  constructor(private http: HttpClient) { }

  searchFood(query: string) {
    const url = ``;

    let obsFood = http.get();
  }
}
