import {Output, Component, Input, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';

import { UserService } from '../../../user/providers/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private _user: firebase.User;
  constructor(public userService: UserService) { }
  @Output() action = new EventEmitter();
  @Input() set user(user) {
    this._user = user;
  }

  get user() {
    return this._user;
  }

  login(provider) {
    this.action.emit(provider);
  }

  logout() {
    this.action.emit('logout');
  }
}
