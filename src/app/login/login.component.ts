import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatFormFieldModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    userName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  constructor(){
    this.loginForm.controls.userName.setValue('soumya');
    this.loginForm.controls.password.setValue('123');
  }
  
 

  onSubmit(){
console.warn(this.loginForm.value);
console.log(this.loginForm.value);

  }
}
