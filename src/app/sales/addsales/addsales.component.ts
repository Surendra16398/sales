import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router'
@Component({
  selector: 'app-addsales',
  templateUrl: './addsales.component.html',
  styleUrls: ['./addsales.component.scss']
})
export class AddsalesComponent implements OnInit {

  Dealer:any
  constructor(
    private fm:FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.Dealer = this.fm.group({
      firstName:["",Validators.required,],
      lastName:["",Validators.required],
      phone:[""],
      address:[""],
      aadhar:[""],
      pan:[""],
      dob:[""],
      password:[""],
      confirmPwd:[""],
     //  signupas:[""],
    })
  }
  dealerSubmit(){
    console.log(this.Dealer.value);
  }
  
}
