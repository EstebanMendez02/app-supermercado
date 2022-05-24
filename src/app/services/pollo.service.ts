import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlinesPO } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PolloService {

  constructor( private http: HttpClient) { }

  getTopHeadLinesPO() {
    return this.http.get<RespuestaTopHeadlinesPO>('https://api.spoonacular.com/food/menuItems/search?query=chicken&apiKey=f2ee7727bac244ff95e8b32bc3140382')
  }
}
