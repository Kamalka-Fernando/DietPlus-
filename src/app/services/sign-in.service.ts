import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { loginDetails } from './sign-in.model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient ) { }

  readonly baseUrl = 'http://localhost:5000/login';

  loginData: loginDetails = new loginDetails();
  list: loginDetails[]

  postLoginData(){
    console.log("login ekt aawa")
    return this.http.post(this.baseUrl, this.loginData)
  }

  refreshList(){
    return this.http.get(this.baseUrl)
    .subscribe(data=> {
     this.list = data as loginDetails[];
   })
  }

}
