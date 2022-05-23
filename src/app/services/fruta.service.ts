import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlinesF } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  constructor( private http: HttpClient) { }

  getTopHeadLinesF() {
    return this.http.get<RespuestaTopHeadlinesF>('https://api.spoonacular.com/food/ingredients/search?query=fruit&apiKey=2b1e94ad870f4658a4fe45914deb165d')
  }
}
