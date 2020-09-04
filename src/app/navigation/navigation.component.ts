import { Component, OnInit } from '@angular/core';
import { faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { CurrentUser } from 'src/model/CurrentUser';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user = faUser;
  heart=faHeart;
  currentUser: CurrentUser;

  constructor(private tokenService: TokenStorageService) {
    tokenService.getLoggedInName.subscribe(user => this.changeUser(user))
   }
  
  changeUser(user: CurrentUser){
    this.currentUser = user
  }
  
  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
  }

}
