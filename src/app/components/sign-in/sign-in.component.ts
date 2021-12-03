import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { SignInService } from 'src/app/services/sign-in.service';
import { loginDetails } from 'src/app/services/sign-in.model';
import { NgForm} from '@angular/forms';
import { SignUpService } from 'src/app/services/sign-up.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor( private http: HttpClient, private fb: FormBuilder, public service:  SignInService, public serviceregister:SignUpService) { }

  submitLoginDetails(form:NgForm){

      const email = this.serviceregister.registerData.email
      const password = this.serviceregister.registerData.password
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.loginData = new loginDetails();
  }

  signinbtn(){
    Swal.fire({
      icon: 'success',
      title: 'Your Registration is Successfully Completed!',
      showConfirmButton: false,
      timer: 1500
    })

  }
}

