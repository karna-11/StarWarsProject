import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoSwService {

  constructor(private http:HttpClient) { }

  getChars(){
    return this.http.get('https://swapi.dev/api/people');
  }

  getFilms(){
    return this.http.get('https://swapi.dev/api/films');
  }

}
