import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
  selector: 'app-delete-track',
  templateUrl: './delete-track.component.html',
  styleUrls: ['./delete-track.component.css']
})
export class DeleteTrackComponent implements OnInit {

  public artist: string;
  public mbid1: string;
  public track: string;

  public trackinfo = {
    id : this.mbid1,
    name: this.track,
    comment : this.artist,
  };

  public tracks;
  constructor(private _route: ActivatedRoute, private router: Router, public muzixservice: MuzixHttpService) { }

  ngOnInit() {
    this.mbid1 = this._route.snapshot.paramMap.get('mbid');
    console.log('In delete component : ' + this.mbid1);
    this.muzixservice.findtrack(this.mbid1).subscribe(
      data => {
        console.log(data);
        this.trackinfo.name = data.track.name;
        this.trackinfo.comment = data.track.artist.name;
        this.trackinfo.id = this.mbid1;
        console.log(this.trackinfo);
       const m = this.muzixservice.deleteTrack(this.trackinfo.id).subscribe(
        data => {
          console.log(data);
        }
       );
       console.log(m);
      },
      error => {
        console.log('some error occured in delete component');
        console.log(error.errorMessage);
      }
    );
  }

}
