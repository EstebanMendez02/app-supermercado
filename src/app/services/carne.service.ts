import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlinesC } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarneService {

  constructor( private http: HttpClient) { }

  getTopHeadLinesC() {
    return this.http.get<RespuestaTopHeadlinesC>('https://api.spoonacular.com/food/ingredients/search?query=meat&apiKey=2b1e94ad870f4658a4fe45914deb165d')
  }
}
