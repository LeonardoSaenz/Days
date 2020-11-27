import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  public nombre = "Leo";
  email:string ="leo";
  password:string="01";

  user: IUsuario;

  ngOnInit() {
    this.user = <IUsuario>{};
  }



}
