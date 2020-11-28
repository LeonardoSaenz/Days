import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../account/account.service';
import { IUserInfo, IUserRInfo } from '../../account/user-info';

interface IUsuario {
  id: any;
  email: string;
  password: string;
}

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit{
  user: IUsuario;

  ngOnInit() {
    this.user = <IUsuario>{};
  }

  logIn() {
    let userInfo: IUserInfo = Object.assign({}, this.user);
    this.accountService.logIn(userInfo).subscribe(token => this.takeToken(token),
      error => this.manageError(error));
  }

  register() {
    let userInfo: IUserRInfo = Object.assign({}, this.user);
    this.accountService.create(userInfo).subscribe(token => this.takeToken(token),
      error => this.manageError(error));
  }

  takeToken(token) {
    localStorage.setItem('token', token.token);
    localStorage.setItem('tokenExpiration', token.expiration);
    this.router.navigate([""]);
  }

  manageError(error) {
    if (error && error.error) {
      alert(error.error([""]));
    }
  }
}
