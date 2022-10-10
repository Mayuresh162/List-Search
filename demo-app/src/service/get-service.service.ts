import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get('https://run.mocky.io/v3/b606e1f7-74f2-429d-93de-32ce62ab7901');
  }
}
