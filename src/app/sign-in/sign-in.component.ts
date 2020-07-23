import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from './login';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/of';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: Observable<any>;
  newPost: Observable<any>;

  constructor( private http: HttpClient ) { }

  getPosts(){

    let headers = new HttpHeaders().set('Authorization', 'auth-token')

    this.posts = this.http.get(this.ROOT_URL + '/foo', { headers });
    .retry(3)
    .catch(err => {
      console.log(err)
      return Observable.of(err)
    })
  }

  createPosts(){
    const data:Post = {
      id:null,
      userId: 23,
      title: 'My new post',
      body: 'Hello world!'
    }

    this.newPost = this.http.post(this.ROOT_URL + '/posts', data)

    .map(post => post.title)
  }
}

