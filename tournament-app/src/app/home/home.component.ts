import { AppSettings } from '../app.settings';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../users';

@Component({
  selector: 'tma-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  articleId: string = AppSettings.HOME_CONTENT;

  constructor(public user: UsersService) {
    user.handleAuthentication();
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
