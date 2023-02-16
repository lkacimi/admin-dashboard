import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(private router: Router){}
  
  ngOnInit(): void {
    if(sessionStorage.getItem("token")) {
      this.router.navigate([""]);
    }
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [ Validators.required, Validators.minLength(6)])
  });




  handleSubmit() {
    if (this.loginForm.valid) {
      //Make a call to the backend to check whether the combination is valid
      console.log(this.loginForm.value);
      sessionStorage.setItem("token", "token");
      this.router.navigate([""]);
    } 
   
  }

  
}