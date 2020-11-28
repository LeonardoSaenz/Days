import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../account/account.service';
import { IUserInfo } from '../../account/user-info';


interface IPerfil {
  email: string
  password: string
  description: string
  day: number
  month: number
  year: number
}

@Component({
  selector: 'registration-app',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  perfil: IPerfil;

  ngOnInit() {
    this.perfil = <IPerfil>{};
  }

  

  register() {

  }



}
