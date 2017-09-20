import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Http, Response} from '@angular/http';
import { AppSettings } from '../app.settings';
import { Store } from '@ngrx/store';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AuthService} from './auth0/auth.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as fromUsers from './reducers/users';

@Injectable()
export class UsersService implements OnInit, OnDestroy {

  authProfile: any = null;
  userProfile: User = null;

  private checkUserUrl =  AppSettings.API_ENDPOINT + 'app/check-user';
  private createUserUrl =  AppSettings.API_ENDPOINT + 'app/create-user';

  user$: Observable<User>;
  roles$: Observable<string[]>;

  messageSubscription: Subscription;

  /**
   *
   * @param {Store<State>} store
   * @param {AuthService} auth
   * @param {Http} http
   */
  constructor(private store: Store<fromUsers.State>,
              private auth: AuthService,
              private http: Http) {

    this.user$ = store.select(fromUsers.getUser);
    this.messageSubscription = auth.profileLoaded$.subscribe(
      profile => {
        this.authProfile = profile;
        this.checkUser(this.authProfile['sub']);
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
    this.userProfile = null;
    this.auth.logout();
  }

  public isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  public getProfile(cb: any) {
    if (this.userProfile) {
      return this.userProfile;
    }
    this.auth.getProfile((err: any, profile: any) => {
      this.authProfile = profile;
      // To Do: get user profile from keystome
      cb(err, profile);
    });
  }

  private createUserFromAuth(): User {
    let newUser:any = {};
    let name: any = {};
    let type: string = 'api';

    name.first = this.authProfile.given_name || '';
    name.last = this.authProfile.family_name || '';

    newUser.name = name || null;
    newUser.userName = this.authProfile.name || null;
    newUser.nickName = this.authProfile.nickname || null;
    if (this.authProfile.email) {
      newUser.email = this.authProfile.email
    } else if (this.validateEmail(this.authProfile.name)) {
      newUser.email = this.authProfile.name;
    } else {
      newUser.email = null;
    }
    newUser.roles = [];
    newUser.roles.push('default');
    newUser.picture = this.authProfile.picture || null;
    newUser.active = true;
    newUser.dateCreated = Date.now();
    newUser.dateEnd = null;
    newUser.sub = this.authProfile.sub || null;

    if (this.authProfile.sub.indexOf('google') > -1 ){
      type = 'google';
    } else if (this.authProfile.sub.indexOf('auth0') > -1 ) {
      type = 'auth0';
    }

    newUser.type = type;
    newUser.isAdmin = false;

    return new User(newUser);
  }

  private validateEmail(email: any): boolean {
    const re: any = /(.+)@(.+){2,}\.(.+){2,}/;
    return re.test(email);
  }

  /****************************************************
  * HTTP service calls
  *****************************************************/

  /**
   *
   * @param {string} sub
   */
  checkUser(sub: string): void {
    let data: any = {
      sub: sub
    };

    // To Do: The sub is not passed correctly? because a result is returned

    this.http.post(this.checkUserUrl, data)
      .map((response: Response) => response.json())
      .subscribe(
        (data) => {
          if (data.success) {
            if (data.user) {
              this.userProfile = data.user
            } else {
                this.userProfile = this.createUserFromAuth();
                this.createDBUser(this.userProfile);
            }
          } else {
            console.warn('Error: UserService - checkuser' + data.message);
          }
        },
        error => console.warn('Error: UserService - checkuser(' + sub + ')' + error)
      );
  }

  createDBUser(user: User): void {

    console.log('in createDBUSERs');

    this.http.post(this.createUserUrl, user)
      .map((response: Response) => response.json())
      .subscribe(
        (data) => {
          console.log(data);
        },
        error => console.warn('Error: UserService - createUser ' + error)
      );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }

}
