import { Component, OnInit } from '@angular/core';
import { faUser, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { CurrentUser } from 'src/model/CurrentUser';
import { TokenStorageService } from '../token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user = faUser;
  heart=faHeart;
  signOut= faSignOutAlt;
  currentUser: CurrentUser;
  collapse: boolean = true;
  
  constructor(private tokenService: TokenStorageService,
    private router:Router) {
    tokenService.getLoggedInName.subscribe(user => this.changeUser(user))
   }
  
  changeUser(user: CurrentUser){
    this.currentUser = user
  }
  
  ngOnInit(): void {
    this.currentUser = this.tokenService.getUser();
  }

  onLogout(){
    this.tokenService.signOut();
    this.currentUser= null;
    this.router.navigate(['/login']);
  }
}
