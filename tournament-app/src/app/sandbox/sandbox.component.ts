import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'tma-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

}
