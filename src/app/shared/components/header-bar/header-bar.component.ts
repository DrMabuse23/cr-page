import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

import { ClanService } from '../../../cr-api/providers/clan/clan.service';
import { UserService } from '../../../user/providers/user/user.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  constructor(
    public clanService: ClanService,
    public userService: UserService
  ) { }

  ngOnInit() {
    setTimeout(() => this.userService.isUser(), 2000);
  }

  login(provider) {
    let promise;
    switch (provider) {
      case 'google':
        promise = new firebase.auth.GoogleAuthProvider();
        break;
      case 'twitter':
        promise = new firebase.auth.TwitterAuthProvider();
        break;
      case 'facebook':
        promise = new firebase.auth.FacebookAuthProvider();
        break;
      case 'github':
        promise = new firebase.auth.GithubAuthProvider();
        break;
      case 'logout':
        return this.userService.afAuth.auth.signOut().then(() => {
          this.userService.isUser();
        });
      default:
        break;
    }
    if (promise) {
      this.userService.afAuth.auth.signInWithPopup(promise).then((res) => {
        this.userService.isUser();
      });
    }
  }
}
