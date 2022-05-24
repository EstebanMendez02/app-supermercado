import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlinesF } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  constructor( private http: HttpClient) { }

  getTopHeadLinesF() {
    return this.http.get<RespuestaTopHeadlinesF>('https://api.spoonacular.com/food/menuItems/search?query=fruit&apiKey=f2ee7727bac244ff95e8b32bc3140382')
  }
}
