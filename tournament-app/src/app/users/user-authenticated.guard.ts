import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UsersService} from './';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserAuthenticatedGuard implements CanActivate {

  constructor(public user: UsersService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (!this.user.isAuthenticated()) {
      this.router.navigate(['/home'])
      return false;
    } else {
      return true;
    }
  }
}
