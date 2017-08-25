import { Component } from '@angular/core';
import {AuthService} from './shared/services/auth.service';

@Component({
  selector: 'tma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tma works!';

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

}
