import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/User';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new User();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("onsubmit")
    this.authService.signUp(this.user).subscribe(
      data => {
        console.log(data)
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err =>{
        this.errorMessage = err.error.error;
        this.isSignUpFailed = true 
      }
    )
  }
}
