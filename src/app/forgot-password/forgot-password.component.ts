import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  emailAddress:String;
  isSuccessful:Boolean;
  isFailure:Boolean;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.isSuccessful=false;
    this.isFailure=false;
  }

  onSubmit() {

    this.authService.sendEmailResetPass(this.emailAddress).subscribe(
      data => {
        console.log(data)
        if(data.toString()=="true"){
        this.isSuccessful = true;
        this.isFailure = false;
        }
        else{
          this.isFailure = true;
          this.isSuccessful = false;
        }
      },
      err => {
        console.log("err")
          //TODO SOMETHING WENT WRONG
      })
    

  }
}
