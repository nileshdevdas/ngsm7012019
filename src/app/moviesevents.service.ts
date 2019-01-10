import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { MovieEvent } from './movieevent';

@Injectable({
  providedIn: 'root'
})
export class MovieseventsService {
  private subject: Subject<String> = new Subject();

  constructor() { }

  getPublisherService() {
    console.log('Service accessed.....', this.subject);
    return this.subject;
  }

  getSubscriberService():Observable<String> {
    console.log('Service accessed.....', this.subject);
    return this.subject.asObservable();
  }

}
