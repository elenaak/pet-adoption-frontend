import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../z-service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  newPassword: String;
  confirmPassword: String;
  match = true;
  token: String;
  isSuccessful: Boolean;
  isFailure: Boolean;
  isTokenValid: Boolean;
  isTokenInValid: Boolean;
  isSubmited:Boolean;
  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(
      switchMap(params => {
        this.token = params.get('token');
        return this.authService.validateTokenResetPass(this.token);
      }),
    ).subscribe(tokenResponse => {
      if (tokenResponse.toString() == "true") {
        this.isTokenValid = true;
        this.isTokenInValid = false;
      }
      else {
        this.isTokenValid = false;
        this.isTokenInValid = true;
      }
    },err => {
      this.isTokenValid = false;
      this.isTokenInValid = false;
    })
  }

  onSubmit() {
    if (this.newPassword != this.confirmPassword)
      this.match = false;
    else {
      this.isSubmited=true;
      this.match = true;
      this.authService.resetPass(this.newPassword, this.token).subscribe(response => {
        if (response.toString() == "true") {
          this.isSuccessful = true;
          this.isFailure = false;
        }
        else {
          this.isSuccessful = false;
          this.isFailure = true;
        }
      });
    }
  }
}
