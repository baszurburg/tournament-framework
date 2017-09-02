import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {UsersService} from '../../users/users.service';

@Component({
  selector: 'tma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public user: UsersService) {
    user.handleAuthentication();
  }

  ngOnInit() {
  }

}
