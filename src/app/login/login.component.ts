import { Component, OnInit } from '@angular/core';
import { AuthService } from '../z-service/auth.service';
import { TokenStorageService } from '../token-storage.service';
import { Credentials } from 'src/model/Credentials';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds = new Credentials();
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  username: String = '';
  loading = false;


  constructor(private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.username = this.tokenStorage.getUser().username;
    }
  }
  onSubmit(): void {
    this.loading = true;
    this.authService.signIn(this.creds)
      .subscribe(
        data => {
          this.loading = false;
          this.tokenStorage.saveToken(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage();
        },
        err => {
          this.loading = false;
          this.errorMessage = err.message.msg
          this.isLoginFailed = true;
        }
      );
  }

  onLogout() {
    this.tokenStorage.signOut();
    this.isLoggedIn = false;
  }
  reloadPage(): void {
    this.router.navigate(['/']);
  }



}
