import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: any;

  constructor( private http: HttpClient ) { }

  getPosts(){
    this.posts = this.http.get(this.ROOT_URL + '/posts')
  }

}
