import { CurrentUser } from '../../../user/models/currentuser.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: firebase.User;
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.isUser();
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

    this.afAuth.auth.signInWithPopup(promise).then((res) => {
      this.isUser();
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => this.isUser());
  }

  isUser() {
    this.user = this.afAuth.auth.currentUser;
    if (this.user) {
      // this.User is signed in.
      console.log('user', this.user);
    } else {
      // No user is signed in.
    }
  }
}
