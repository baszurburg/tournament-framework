import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import { AuthService} from './auth0/auth.service';

import * as fromUsers from './reducers/users';

@Injectable()
export class UsersService implements OnInit, OnDestroy {

  authProfile: any = null;

  user$: Observable<User>;
  roles$: Observable<string[]>;

  messageSubscription: Subscription;

  /**
   * @param {Store<State>} store
   * @param {AuthService} auth
   */
  constructor(private store: Store<fromUsers.State>, private auth: AuthService) {
    this.user$ = store.select(fromUsers.getUser);
    this.messageSubscription = auth.profileLoaded$.subscribe(
      profile => {
        this.authProfile = profile;

        //go create a user, but first check if the code gets here

      });
  }

  getUser(): Observable<User> {
    return this.user$;
  }

  public handleAuthentication(): void {
    this.auth.handleAuthentication();
  }

  public login(): void {
    this.auth.login();
  }

  public logout(): void {
    this.auth.logout();
    // ToDo: kill here also the user - and instruct the store
  }

  public isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  public getProfile(cb: any) {
    if (this.authProfile) {
      return this.authProfile;
    }
    this.auth.getProfile((err: any, profile: any) => {
      this.authProfile = profile;
      cb(err, profile);
    });
  }

  ngOnInit() {}


  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

}
