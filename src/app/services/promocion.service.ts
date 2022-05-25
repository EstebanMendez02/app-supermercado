import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlinesPR } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  constructor(private http: HttpClient) { }

  getTopHeadLinesPR(){
    return this.http.get<RespuestaTopHeadlinesPR>('https://api.spoonacular.com/food/menuItems/search?query=birds&apiKey=f2ee7727bac244ff95e8b32bc3140382')
  }
}
