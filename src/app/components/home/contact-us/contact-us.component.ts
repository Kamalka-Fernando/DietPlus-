import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clicked(){
    Swal.fire({
      title: 'Success!',
      text: 'Mesaage Sent Successfully!',
      icon: 'success',
      timer: 1500

    })
}
}
