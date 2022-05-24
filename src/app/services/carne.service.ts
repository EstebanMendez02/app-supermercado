import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlinesC } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarneService {

  constructor( private http: HttpClient) { }

  getTopHeadLinesC() {
    return this.http.get<RespuestaTopHeadlinesC>('https://api.spoonacular.com/food/menuItems/search?query=steaks&apiKey=f2ee7727bac244ff95e8b32bc3140382')
  }
}
