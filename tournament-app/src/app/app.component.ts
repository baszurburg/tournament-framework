import { Component } from '@angular/core';
import {UsersService} from './users';

@Component({
  selector: 'tma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tma works!';

  constructor(public user: UsersService) {
    user.handleAuthentication();
  }

}
