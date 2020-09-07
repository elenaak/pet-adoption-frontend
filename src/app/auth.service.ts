import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User';
import { CurrentUser } from '../model/CurrentUser';
import { Credentials } from '../model/Credentials';
import { Observable, from } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(user: User) {
    return this.http.post('http://localhost:8080/authenticate/signup',
      {
        username: user.username,
        password: user.password,
        email: user.email,
        description: user.description
      });
  }

  signIn(credentials: Credentials) {
    return this.http.post('http://localhost:8080/login', {
      username: credentials.username,
      password: credentials.password
    }, { responseType: 'text' });

  }

  editProfile(user: CurrentUser){
    return this.http.post('http://localhost:8080/edit/profile',{
      email: user.email,
      description:user.description
    });
  }

  getCurrentUser():Observable<CurrentUser>{
    return this.http.get<CurrentUser>('http://localhost:8080/authenticate');
  }
}
