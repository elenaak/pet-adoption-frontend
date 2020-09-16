import { Component } from '@angular/core';
import { User } from 'src/model/User';
import { AuthService } from '../z-service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user = new User();
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  loading = false;


  constructor(private authService: AuthService) { }

  onSubmit() {
    this.loading = true;
    this.authService.signUp(this.user).subscribe(
      data => {
        this.loading = false;
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.loading = false;
        this.errorMessage = err.error.error;
        this.isSignUpFailed = true
      }
    )
  }
}
