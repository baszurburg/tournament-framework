import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import {Cmp1Component} from './cmps/cmp1.component';
import {Cmp2Component} from './cmps/cmp2.component';
import {Cmp3Component} from './cmps/cmp3.component';

@Component({
  selector: 'tma-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  constructor(public user: UsersService) {
    user.handleAuthentication();
  }

  ngOnInit() {
  }

}
