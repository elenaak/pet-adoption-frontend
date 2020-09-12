import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/User';
import { AuthService } from '../auth.service';
import { finalize } from 'rxjs/operators';

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
  loading=false;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.loading=true;
    this.authService.signUp(this.user).subscribe(
      data => {
        this.loading=false;
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.loading=false;
        this.errorMessage = err.error.error;
        this.isSignUpFailed = true
      }
    )
  }
}
