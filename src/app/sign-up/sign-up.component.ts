import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/User';
import { TokenStorageService } from '../token-storage.service';
import { AuthService } from '../z-service/auth.service';

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
  loading = false;


  constructor(private authService: AuthService,
    private tokenService: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken())
      this.router.navigate(['/profile'])
  }

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
