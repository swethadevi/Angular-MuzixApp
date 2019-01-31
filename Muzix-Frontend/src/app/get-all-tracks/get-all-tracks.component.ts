import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-get-all-tracks',
  templateUrl: './get-all-tracks.component.html',
  styleUrls: ['./get-all-tracks.component.css']
})
export class GetAllTracksComponent implements OnInit {

  public tracks;
  constructor(private _route: ActivatedRoute, private router: Router, public muzixservice: MuzixHttpService) { }

  ngOnInit() {
    this.tracks = this.muzixservice.getAllTracks().subscribe(
      data => {
        this.tracks = data;
      },
      error => {
        console.log('some error occured in getAllTracks');
        console.log(error.errorMessage);
      }
    );
  }

}
