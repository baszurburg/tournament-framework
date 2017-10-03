import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../../users/users.service';

@Component({
  selector: 'tma-profile-edit',
  templateUrl: './profile-edit.component.html',
  styles: []
})
export class ProfileEditComponent implements OnInit {
  profile: any = null;
  profileForm: FormGroup;

  constructor(public user: UsersService) {
    if (this.user.isAuthenticated()) {
      if (this.user.userProfile) {
        this.profile = this.user.userProfile;
      } else {
        this.profile = this.user.getProfile();
      }
    }

    this.profileForm = new FormGroup({
      'userName': new FormControl(this.profile.userName),
      'email': new FormControl(),
      'nickName': new FormControl()
    });
  }

  onSubmit() {
    console.log(this.profileForm);
  }

  ngOnInit() {


  }

}
