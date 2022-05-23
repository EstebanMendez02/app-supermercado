import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlinesP } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PescadoService {

  constructor(private http: HttpClient) { }

  getTopHeadLinesP() {
    return this.http.get<RespuestaTopHeadlinesP>('https://api.spoonacular.com/food/menuItems/search?query=fish&apiKey=2b1e94ad870f4658a4fe45914deb165d')
  }
}
