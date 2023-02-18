import { Component } from '@angular/core';

class User{
  constructor(public name:string, public email:string, public password:string){}
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:User = new User("", "", ""); 
}
