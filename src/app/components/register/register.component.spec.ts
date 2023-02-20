import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from '../login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { RegisterComponent } from './register.component';


//No longer unit tests, because they test the component and its tempalate at the same time.
describe('RegisterComponent', () => {
  let registerComponent: RegisterComponent;
 
  beforeEach(async () => {
   registerComponent = new RegisterComponent();
  });

  it('should create', () => {
    expect(registerComponent).toBeTruthy();
  });

  it('The user is defined', () => {
    expect(registerComponent.user).toBeTruthy();
  })

  it('The property name is undefined', () => {
    expect(registerComponent.name).toBeUndefined();
  })
});
