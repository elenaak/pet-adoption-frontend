import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';
import { Credentials } from 'src/model/Credentials';
import { CurrentUser } from 'src/model/CurrentUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: CurrentUser;
  tokenString: string;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.tokenString = this.token.getToken()
  }

}
