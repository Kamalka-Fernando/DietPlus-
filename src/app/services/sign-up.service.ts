import { Injectable } from '@angular/core';
import { registerDetails } from './sign-up.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient ) { }

  readonly baseUrl = 'http://localhost:5000/register';

  registerData : registerDetails = new registerDetails()
  list: registerDetails[]

  postRegisterData(){
    return this.http.post(this.baseUrl, this.registerData)
  }

  // getDeptDetail():Observable<any>{
  //   return this.http.get(this.baseUrl)
  // }
  refreshList(){
    return this.http.get(this.baseUrl)
    .subscribe(data=> {
     this.list = data as registerDetails[]
   })
  }

}

