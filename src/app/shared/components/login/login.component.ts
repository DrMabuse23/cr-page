import {Observable} from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {

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
    this.afAuth.auth.signInWithRedirect(promise).then((res) => {
      debugger;
    });
  }
}
