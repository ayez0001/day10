import { Component , OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, NgModel, SelectControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { infolist } from '../models';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Output() onAddForm = new EventEmitter <infolist>();

      process(form:NgForm) {
     // const values = form.value;
     const name = form.value.name;
     const email = form.value.email;
     const gender = form.value.gender;
     const date = form.value.date;
     const address = form.value.address;
     const country = form.value.country;
     const phone= form.value.phone;
     // console.log("form.value: ", values);
  
//      const v: infolist = {
// name,email, gender,date,address,country
//      }
      // const v:infolist = {
      //   name:values.name,
      //   email:values.email,
      //   gender:values.gneder,
      //   date:values.date,
      //   address:values.address,
      //   country:values.country,
      //   phone:values.phone,
      // }

    //  console.log("v: ", v);
      this.onAddForm.next(name);
      this.onAddForm.next(email);
      this.onAddForm.next(gender);
      this.onAddForm.next(date);
      this.onAddForm.next(address);
      this.onAddForm.next(country);
      this.onAddForm.next(phone);
      form.resetForm();  

    }

  constructor(private router:Router){}


 confirmation(){
  this.router.navigate(['/confirm']);
}
ngOnInit() {
}
}
