import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  searchString: string;

  searchMusic(){
    this._spotifyService.searchMusic(this.searchString)
      .subscribe(res => {
        console.log(res.artists.items);
      })
  }

}
