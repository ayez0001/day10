import { Component , OnInit} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { infolist} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration App';
  infolist:infolist[] = [];

  onAddForm(v:infolist) {
    this.infolist.push(v);
 
  }

  constructor(private router:Router){}
ngOnInit() {
  // initialize user
  // this.user = {
  //   username: ‘’,
  //   email: ‘’,
  //   password: ‘’,
  //   confirmPassword: ‘’
  // }
}
Home(){
  this.router.navigate(['']); 
}
}

