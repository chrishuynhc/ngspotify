import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private searchUrl: string;

  constructor(private _http:Http) {

  }

  searchMusic(str: string, type='artist'){

    
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US&access_token=BQDnJbyf7zMPf4Z9BJ3WW20GuihyUoKa7PQVKiS5zdYpf-SVSiN51ubKT_DNq6XiOjVZ5keDcIPnRNcTxyjaJDmhyVZ4UTqFOyv6Mswjg7SHU774y84zeOuOeP2q693ZeEcJuWvnzXvujz4&token_type=Bearer';
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }
 


}
