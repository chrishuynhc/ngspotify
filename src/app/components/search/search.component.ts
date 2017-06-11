import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist'

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
  searchRes: Artist[];

  searchMusic(){
    this._spotifyService.searchMusic(this.searchString)
      .subscribe(res => {
        this.searchRes = res.artists.items;
      })
  }

}
