import { Injectable, Output, EventEmitter } from '@angular/core';
import { Credentials } from 'src/model/Credentials';
import { CurrentUser } from 'src/model/CurrentUser';
import { AuthService } from '../app/z-service/auth.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  @Output() getLoggedInName: EventEmitter<CurrentUser> = new EventEmitter();

  constructor(private authService: AuthService) { }

  signOut(): void {
    window.localStorage.clear();
    this.getLoggedInName.emit(null);
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
    this.authService.getCurrentUser().subscribe(
      user => {
        this.saveUser(user);
        this.getLoggedInName.emit(user);
      }
    );
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: CurrentUser): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): CurrentUser {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }
}
