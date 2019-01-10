import { Component, OnInit } from '@angular/core';
import { MovieseventsService } from '../moviesevents.service';

@Component({
  selector: 'app-moviewreviews',
  templateUrl: './moviewreviews.component.html',
  styleUrls: ['./moviewreviews.component.css']
})
export class MoviewreviewsComponent implements OnInit {
  eventService: MovieseventsService;
  movieName: String;
  constructor(eventService: MovieseventsService) {
    this.eventService = eventService;
  }

  ngOnInit() {
    this.eventService.getSubscriberService().subscribe((payload) => {
      this.movieName = payload;
    });
  }



}
