import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpApiService {
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', Accept: 'application/json' })
  };

  constructor(private _httpService: HttpClient) {}

  public getIpInfo(): Observable<any> {
    return this._httpService
    .get('https://ipapi.co/json', this.httpOptions)
    .pipe(
        map((response) => response),
        tap(x => console.log(x)),
        catchError(() =>
          throwError(
            () => 'Could not connect to the server. Please try again later.'
          )
        )
      );
  }
}
