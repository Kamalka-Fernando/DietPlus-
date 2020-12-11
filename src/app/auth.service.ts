import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  getAllPosts() {
    return this.http.get('/posts').pipe(map((posts) => {
      return posts; }),
    );
  }
}
