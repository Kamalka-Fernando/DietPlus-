import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { SignInService } from 'src/app/services/sign-in.service';
import { loginDetails } from 'src/app/services/sign-in.model';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor( private http: HttpClient, private fb: FormBuilder, public service:  SignInService) { }
 
  submitLoginDetails(form:NgForm){
    this.service.postLoginData()
    .subscribe(
      res =>{
        this.service.refreshList()
        this.resetForm(form);  
      },
      err =>{
        console.log(' epa wenw waradi ne' +err);
      }
    )
  }
  
  resetForm(form:NgForm){
    form.form.reset();
    this.service.loginData = new loginDetails();
  } 
   
}

