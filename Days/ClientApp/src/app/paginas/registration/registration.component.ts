import { Component, OnInit } from '@angular/core';


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
  styleUrls:['./registration.component.css']
})

export class RegistrationComponent implements OnInit{
  public nombre = "Leo"
  email;
  password;
  confirmPassword: string;

  constructor() {}

  perfil: IPerfil;

  ngOnInit() {
    this.perfil = <IPerfil>{};
  }



}
