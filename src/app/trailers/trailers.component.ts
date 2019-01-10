import { Component, OnInit } from '@angular/core';
import { TrailerinfoService } from '../trailerinfo.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})
export class TrailersComponent implements OnInit {
  title = 'New Releases';
  footer = 'Copyright Siemens.... ';
  content: String = '';
  minfo = null; 
  trailerInfo: TrailerinfoService = null;
  constructor(trailerInfo: TrailerinfoService) {
      this.trailerInfo = trailerInfo;
      console.log(this.trailerInfo);
        console.log('Intialized.................');
        trailerInfo.genreChangeEvent.subscribe(function(event) {
          console.log(' Recevied Event ' , event);
        });
   }

   handleClick(e) {
    console.log(e.target.innerHTML);
     console.log(' I was clicked ');
     this.title = 'Change the title ......';
    //////////////////////////////////////////////////////////////////////////////////////////
     this.trailerInfo.getLatestTrailers().subscribe((data) => {
      this.minfo = data;
      console.log(this.minfo);
    });
    //////////////////////////////////////////////////////////////////////////////////////////

  }
  ngOnInit() {
  }

}
