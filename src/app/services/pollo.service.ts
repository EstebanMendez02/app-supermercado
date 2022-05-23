import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlinesPO } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PolloService {

  constructor( private http: HttpClient) { }

  getTopHeadLinesPO() {
    return this.http.get<RespuestaTopHeadlinesPO>('https://api.spoonacular.com/food/menuItems/search?query=chicken&apiKey=2b1e94ad870f4658a4fe45914deb165d')
  }
}
