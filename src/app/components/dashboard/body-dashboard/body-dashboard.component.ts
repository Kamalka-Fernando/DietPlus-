import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-body-dashboard',
  templateUrl: './body-dashboard.component.html',
  styleUrls: ['./body-dashboard.component.css']
})
export class BodyDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  monalert(){
    Swal.fire({

      title: 'MONDAY',
      text: 'Dhal Curry, Binjol Moju, Tuna fish, Banana!',
      titleText:'success',
      footer: 'Drink 6 glasses of water per day'
    })
  }

}
