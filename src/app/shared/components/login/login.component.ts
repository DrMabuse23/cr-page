import { UserService } from '../../../user/providers/user/user.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: firebase.User;
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.isUser();
    this.user = this.userService.user;
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
      default:
        break;
    }

    this.userService.afAuth.auth.signInWithPopup(promise).then((res) => {
      this.userService.isUser();
    });
  }

  logout() {
    this.userService.afAuth.auth.signOut().then(() => this.isUser());
  }
}
