import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';
import { AuthService } from '../z-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private token: TokenStorageService,
    private authService: AuthService,
    private router: Router) { }

  logged = false;
  error: String;
  oldPassword: String;
  newPassword: String;
  confirmPassword: String;
  match = true;
  loading=false;

  ngOnInit(): void {
    if (this.token.getToken())
      this.logged = true;
  }

  onSubmit() {
    if (this.newPassword != this.confirmPassword)
      this.match = false;
    else {
      this.loading=true;
      this.match = true;
      this.authService.changePassword(this.oldPassword, this.newPassword).subscribe(
        succ => {
          this.loading=false;
          this.token.signOut();
          this.router.navigate(['/login']);
        }, error => {
          this.loading=false;
          this.error = error.error;
        });
    }
  }

}
