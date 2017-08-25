import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'tma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

}
