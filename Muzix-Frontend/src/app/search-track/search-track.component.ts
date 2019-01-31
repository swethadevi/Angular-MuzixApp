

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-track',
  templateUrl: './search-track.component.html',
  styleUrls: ['./search-track.component.css']
})
export class SearchTrackComponent implements OnInit {

  trackname: string;
  constructor(private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  search(): any {
    console.log('trackname : ' + this.trackname);
    this.router.navigate(['/searchtrack', this.trackname]);
    
  }

}