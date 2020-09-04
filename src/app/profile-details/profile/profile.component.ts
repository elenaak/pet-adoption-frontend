import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../token-storage.service';
import { Credentials } from 'src/model/Credentials';
import { CurrentUser } from 'src/model/CurrentUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: CurrentUser;
  isLogged = false;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    if (this.token.getToken()) {
      this.isLogged = true;
      this.currentUser= this.token.getUser();
    }
  }

}
