import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDx9-wlZSrSzwQWMVM_sen2lxSgcTP22f0HL4-8o8o7RXhAL_uh-JAbe8TaWxEP9762cH-RCbb47y84eeVonJHww8JaSN6iLx0aBqd87JNi1pfI6UpyqKhD2Qs2ORyz8Cgyl86Rs9OZT7RZUIxq7LtDY_GMcks'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
