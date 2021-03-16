import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dietplan',
  templateUrl: './dietplan.component.html',
  styleUrls: ['./dietplan.component.css']
})
export class DietplanComponent implements OnInit {
 

  constructor(private fb: FormBuilder) { }

  personalDetails = this.fb.group({
    fullname: ['', Validators.required],
    age:  ['', Validators.required],
    height: ['', Validators.required],
    weight: ['', Validators.required],
    email: ['', Validators.required]
  });

  diseaseDetails = this.fb.group({
    selectDisease: ['', Validators.required],
    selectMedicine: ['', Validators.required]
  });

  foodAllergies= this. fb.group({
    foodallergy: ['', Validators.required],
    vegNon: ['', Validators.required]
  });

  ngOnInit() {
    
  }

  submitPersonalDetails(){
    console.log(this.personalDetails.value)
  }
  submitDiseaseDetails(){
    console.log(this.diseaseDetails.value)
  }
  submitFoodAllergies(){
    console.log(this.diseaseDetails.value)
  }




}
