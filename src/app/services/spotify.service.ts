import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  private authToken = 'BQAtuW2oTHFwnuOct3pxywgDtSJScpYRUz3gl6-jD6DUrTAe32DV73jPV4HQVRoh7w6LIqSwgcxkvJpqMPLabBmgPM-OO3MVjI9JBxE2JgbQDrUQucsS_E5JuoK3ubsLnJEa0oNJPah4L6w';
  private authHeaders: Headers;
  

  constructor(private _http:Http) {

  }

  createTokenAuthorizationHeader() {
    this.authHeaders = new Headers();
    this.authHeaders.append('Authorization', 'Bearer ' + this.authToken);
  }

  searchMusic(str: string, type='artist'){
    this.createTokenAuthorizationHeader();

    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type;
    return this._http.get(this.searchUrl, {headers: this.authHeaders})
      .map(res => res.json());
  }

  getArtist(id: string){
    this.createTokenAuthorizationHeader();

    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this._http.get(this.artistUrl, {headers: this.authHeaders})
      .map(res => res.json());
  }

  getAlbums(artistId: string){
    this.createTokenAuthorizationHeader();

    this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId +'/albums';
    return this._http.get(this.albumsUrl, {headers: this.authHeaders})
      .map(res => res.json());
  }

   getAlbum(id: string){
    this.createTokenAuthorizationHeader();

    this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
    return this._http.get(this.albumUrl, {headers: this.authHeaders})
      .map(res => res.json());
  }
 


}
