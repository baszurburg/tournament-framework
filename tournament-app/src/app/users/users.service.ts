import {Injectable, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './user';
import { Observable } from 'rxjs/Observable';

import { AuthService} from '../shared/services/auth.service'

import * as fromUsers from './reducers/users'


@Injectable()
export class UsersService implements OnInit {

  authProfile: any = null;

  tmaUser$: Observable<User>;
  roles$ : Observable<string[]>;

  constructor(private store: Store<fromUsers.State>, private auth: AuthService) {
    this.tmaUser$ = store.select(fromUsers.getUser);
  }

  getUser() : Observable<User> {
    return this.tmaUser$;
  }

  public handleAuthentication(): void {
    this.auth.handleAuthentication();
  }

  public login(): void {
    this.auth.login();
  }

  public logout(): void {
    this.auth.logout();
  }

  public isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  public getProfile(cb : any) {
    if (this.authProfile) {
      return this.authProfile;
    }
    this.auth.getProfile((err: any, profile : any) => {
      this.authProfile = profile;
      cb(err, profile);
    });
  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.authProfile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err: any, authProfile : any) => {
        this.authProfile = authProfile;
      });
    }
  }

}
