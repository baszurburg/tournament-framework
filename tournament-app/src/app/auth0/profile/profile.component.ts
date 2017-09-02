import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../users/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(public user: UsersService) { }

  ngOnInit() {
    if (this.user.authProfile) {
      this.profile = this.user.authProfile;
    } else {
      this.user.getProfile((err: any, profile : any) => {
        this.profile = profile;
      });
    }
  }

}
