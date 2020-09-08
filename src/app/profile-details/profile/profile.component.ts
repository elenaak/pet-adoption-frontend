import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../token-storage.service';
import { CurrentUser } from 'src/model/CurrentUser';
import { faEdit, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: CurrentUser;
  isLogged = false;
  edit = faEdit;
  lock = faLock;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    if (this.token.getToken()) {
      this.isLogged = true;
      this.currentUser=this.token.getUser();
    }
    this.token.getLoggedInName.subscribe(user => this.currentUser=user)
  }

}
