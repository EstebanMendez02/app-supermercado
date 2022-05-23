import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlinesL } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LacteoService {

  constructor( private http: HttpClient) { }

  getTopHeadLinesL() {
    return this.http.get<RespuestaTopHeadlinesL>('https://api.spoonacular.com/food/ingredients/search?query=dairy&apiKey=2b1e94ad870f4658a4fe45914deb165d')
  }
}
