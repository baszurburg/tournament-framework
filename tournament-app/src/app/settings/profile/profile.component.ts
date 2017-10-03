import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any = null;

  constructor(public user: UsersService) { }

  ngOnInit() {
    if (this.user.isAuthenticated()) {
      if (this.user.userProfile) {
        this.profile = this.user.userProfile;
      } else {
        this.profile = this.user.getProfile();
      }
    }
  }

}