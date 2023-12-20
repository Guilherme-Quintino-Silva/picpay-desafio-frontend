import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class PayServiceService {
  readonly URL: string = 'http://localhost:3000/users';
  constructor(
    public http: HttpClient
  ) { }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.URL);
  }
}
