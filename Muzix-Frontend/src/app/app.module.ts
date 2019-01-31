import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTrackComponent } from './search-track/search-track.component';
import { SaveTrackComponent } from './save-track/save-track.component';
import { DeleteTrackComponent } from './delete-track/delete-track.component';
import { UpdateTrackComponent } from './update-track/update-track.component';
import { LastFmComponent } from './last-fm/last-fm.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MuzixHttpService } from './muzix-http.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GetAllTracksComponent } from './get-all-tracks/get-all-tracks.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchTrackComponent,
    SaveTrackComponent,
    SaveTrackComponent,
    DeleteTrackComponent,
    UpdateTrackComponent,
    LastFmComponent,
    HomeComponent,
    GetAllTracksComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'search', component: SearchTrackComponent},
      {path: 'searchtrack/:trackname', component: LastFmComponent},
      {path: 'savetrack/:mbid', component: SaveTrackComponent},
      {path: 'myplaylist', component: GetAllTracksComponent},
      {path: 'deletetrack/:mbid', component: DeleteTrackComponent},
      // {path: 'updatetrack/:mbid/:comment', component: UpdateTrackComponent},
      {path: 'updatecomment/:mid/:comment', component: UpdateTrackComponent},
    ])
  ],
  providers: [MuzixHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
