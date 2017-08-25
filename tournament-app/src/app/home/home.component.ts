import {Component, OnDestroy, OnInit} from '@angular/core';
import { AppSettings } from '../app.settings';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'tma-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  articleId: string = AppSettings.HOME_CONTENT;

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
