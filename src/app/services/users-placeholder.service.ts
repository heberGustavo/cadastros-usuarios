import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersPlaceholderService {

  constructor(
    private readonly _httpClient: HttpClient
  ) {}

  getUsersPlaceHolder(): Observable<any> {
    return this._httpClient.get("https://jsonplaceholder.typicode.com/users");
  }
}
