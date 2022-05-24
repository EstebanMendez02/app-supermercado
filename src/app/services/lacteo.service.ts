import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlinesL } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LacteoService {

  constructor( private http: HttpClient) { }

  getTopHeadLinesL() {
    return this.http.get<RespuestaTopHeadlinesL>('https://api.spoonacular.com/food/menuItems/search?query=dairy&apiKey=f2ee7727bac244ff95e8b32bc3140382')
  }
}
