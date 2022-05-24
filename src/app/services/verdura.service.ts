import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlinesV } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VerduraService {

  constructor( private http: HttpClient) { }

  getTopHeadLinesV() {
    return this.http.get<RespuestaTopHeadlinesV>('https://api.spoonacular.com/food/menuItems/search?query=vegetable&apiKey=f2ee7727bac244ff95e8b32bc3140382')
  }
}
