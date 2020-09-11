import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { CurrentUser } from '../model/CurrentUser';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private tokenService: TokenStorageService) { }

  public canActivate(route: ActivatedRouteSnapshot) {
    if (!this.tokenService.getToken)
      return false;
    const user: CurrentUser = this.tokenService.getUser()
    if (user.userRole.name == "ROLE_ADMIN")
      return true;
    return false;
  }
}
