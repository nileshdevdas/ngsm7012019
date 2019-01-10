import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrailerinfoService {
   lastTrailer = 'Aquaman';
  genreChangeEvent: Subject<String> = new Subject<String>();
  http: HttpClient = null;

  constructor(http: HttpClient) {
    this.http = http;
    console.log('Service Intialized........');
   }

  getLatestTrailers(): Observable<Object> {
    return this.http.get('http://www.omdbapi.com/?i=tt3896198&apikey=f38c03c6');
  }
}
