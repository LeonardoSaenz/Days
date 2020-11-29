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

<<<<<<< HEAD
export class RegistrationComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  perfil: IPerfil;

  ngOnInit() {
    this.perfil = <IPerfil>{};
  }
=======
export class RegistrationComponent {

  email: string
  password: string
  confirmpassword: string
  description: string
  day: number
  month: number
  year: number
>>>>>>> 3611f618e573ed87d3e7be7279c28745f30e6aa9

  

  register() {

  }



}
