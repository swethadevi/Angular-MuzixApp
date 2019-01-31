import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MuzixHttpService } from '../muzix-http.service';

@Component({
 selector: 'app-update-track',
 templateUrl: './update-track.component.html',
 styleUrls: ['./update-track.component.css']
})
export class UpdateTrackComponent implements OnInit {
  public mid1: string;
  public comments: string;
  public updatedtracks: string;
  constructor(private _route: ActivatedRoute, private router: Router, public muzixservice: MuzixHttpService) { }

 ngOnInit() {
   this.mid1 = this._route.snapshot.paramMap.get('mid');
  this.comments = this._route.snapshot.paramMap.get('comment');
  console.log(this.mid1 + ' ' + this.comments);
  this.updatedtracks = this.muzixservice.updatecomment(this.mid1, this.comments).subscribe(
   data => {
     this.updatedtracks = data;
   },
   error => {
     console.log('some error occured in Update Track');
     console.log(error.errorMessage);
   }
 );
}


 }


