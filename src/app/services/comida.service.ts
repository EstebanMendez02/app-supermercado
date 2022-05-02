import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor( private http: HttpClient) { }

  getTopHeadLines() {
    return this.http.get<RespuestaTopHeadlines>('https://api.spoonacular.com/food/menuItems/search?query=burger&number=2&apiKey=2b1e94ad870f4658a4fe45914deb165d')
  }
}
