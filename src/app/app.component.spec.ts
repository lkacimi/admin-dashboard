import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {RouterTestingModule} from '@angular/router/testing';
import { AppComponent } from './app.component';

fdescribe('AppComponent', () => {
  let mockRouter: Router;
  let appComponent: AppComponent; 
  
  beforeEach(async () => {

    //the AppComponent requires an instance of the router object
    //1. Mock the router. To write a mock
    let mockRouter = {
      url: ""
    };
    
    //@ts-ignore
    appComponent = new AppComponent(mockRouter);
    
  });

  it("Navigation should be displayed", () => {
     //@ts-ignore
     mockRouter = {url: ""}; 
    //@ts-ignore
     mockRouter.url = "/other-url-segment"

     appComponent = new AppComponent(mockRouter);
     
     //@ts-ignore
     expect(appComponent.shouldIBeDisplayed()).toBe(true);
  });

  it("Navigation should not be displayed", () => {
  
     //@ts-ignore
     mockRouter = {url: ""}; 
  
     //@ts-ignore
    mockRouter.url = "login"
    appComponent = new AppComponent(mockRouter);
    
    expect(appComponent.shouldIBeDisplayed()).toBe(false);
    console.log(mockRouter);
  })

});
