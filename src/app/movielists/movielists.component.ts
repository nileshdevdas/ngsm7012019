import { Component, OnInit, Input } from '@angular/core';
import { MovieseventsService } from '../moviesevents.service';

@Component({
  selector: 'app-movielists',
  templateUrl: './movielists.component.html',
  styleUrls: ['./movielists.component.css']
})
export class MovielistsComponent implements OnInit {

  @Input('hversion') homeVersion: Number;

  @Input('nkey') mykey: String;
  version: Number = 1.0;

  movies: any = [
    { 'name': 'Aquaman' , 'year' : '2018'},
    { 'name': 'A Born Star' , 'year' : '2018'},
    { 'name': 'Avengers' , 'year' : '2018'}
  ];
  eventService: MovieseventsService;
  constructor(eventService: MovieseventsService) { 
      this.eventService = eventService;
  }

  ngOnInit() {

  }

  handleReviewClick(e) {
    this.eventService.getPublisherService().next(e.target.innerHTML);
  }

}
