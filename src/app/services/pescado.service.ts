import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlinesP } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PescadoService {

  constructor(private http: HttpClient) { }

  getTopHeadLinesP() {
    return this.http.get<RespuestaTopHeadlinesP>('https://api.spoonacular.com/food/menuItems/search?query=fish&apiKey=f2ee7727bac244ff95e8b32bc3140382')
  }
}
