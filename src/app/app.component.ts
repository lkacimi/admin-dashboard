import { Component } from '@angular/core';
import { faCoffee, faPersonCircleCheck, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashboard';
  
  
  navigation =[
    {
      path:'',
      label: 'Dashboard',
      icon: faCoffee
    },
    {
      path: '/users',
      label: 'Users',
      icon: faPersonCircleCheck
    },
    {
      path: '/orders',
      label: 'Orders',
      icon: faFilterCircleXmark
    },
    {
      path: '/shipments',
      label: 'Shipments',
      icon: faCoffee
    },
    {
      path: '/payments',
      label: 'Payments',
      icon: faCoffee
    },
    {
      path: '/login',
      label: "Login",
      icon: faCoffee
    }
  ];

  constructor(private router: Router) {}

  shouldIBeDisplayed() {
  
    if(this.router.url.endsWith('login') || this.router.url.endsWith('register')) {
      return false;
    }
    return true;
  }

}
