<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../account/account.service';
import { IUserInfo, IUserRInfo } from '../../account/user-info';

interface IUsuario {
  id: any;
  email: string;
  password: string;
}
=======
import { Component } from '@angular/core';

>>>>>>> 3611f618e573ed87d3e7be7279c28745f30e6aa9

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})

<<<<<<< HEAD
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
=======


export class LoginComponent {
  public nombre = "Leo"

  email:string;

  password:string;

  sumar() {
    this.email = this.email+1
  }
  



>>>>>>> 3611f618e573ed87d3e7be7279c28745f30e6aa9
}
