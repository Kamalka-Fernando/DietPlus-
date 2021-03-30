import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { SignInService } from 'src/app/services/sign-in.service';
import { loginDetails } from 'src/app/services/sign-in.model';
import { NgForm} from '@angular/forms';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor( private http: HttpClient, private fb: FormBuilder, public service:  SignInService, public serviceregister:SignUpService) { }
 
  submitLoginDetails(form:NgForm){
    if (this.service.loginData.email == this.serviceregister.registerData.email && 
      this.service.loginData.password == this.serviceregister.registerData.password) {
      alert('Correct login details')
    } else {
      console.error('ggg');
      
    }
  }
  
  resetForm(form:NgForm){
    form.form.reset();
    this.service.loginData = new loginDetails();
  } 
   
}

