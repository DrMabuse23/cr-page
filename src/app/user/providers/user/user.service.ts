import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {
  private _user: firebase.User;
  constructor(public afAuth: AngularFireAuth) {

  }
  get user() {
    return this._user;
  }
  isUser() {
    this._user = this.afAuth.auth.currentUser;
    if (this._user) {
      // this._User is signed in.
      // console.log('user', this._user);
      return true;
    } else {
      // No user is signed in.
      return false;
    }
  }
}
