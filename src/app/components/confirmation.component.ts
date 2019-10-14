import { Component, OnInit, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { infolist } from "../models";


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {


  // @Input() infolist:infolist[];
  @Input() name: string;
  @Input()  email:string;
    @Input() gender: string;
    @Input() date: string;
    @Input() phone: string;
    @Input() address: string;

  constructor(private router:Router){}

  ngOnInit() {
  }
  list(){
    this.router.navigate(['/list']);
  }
  home(){
    this.router.navigate(['']);
  }

}
