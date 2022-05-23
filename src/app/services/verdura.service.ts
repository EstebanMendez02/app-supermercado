import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlinesV } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VerduraService {

  constructor( private http: HttpClient) { }

  getTopHeadLinesV() {
    return this.http.get<RespuestaTopHeadlinesV>('https://api.spoonacular.com/food/menuItems/search?query=vegetable&apiKey=2b1e94ad870f4658a4fe45914deb165d')
  }
}
