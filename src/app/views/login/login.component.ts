import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import {LoginService} from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: any;
  respostaErro: any;

  constructor(private loginService: LoginService, private Router: Router) { }

  ngOnInit(): void {
  }
  loginModel = new User("","");
  mensagem = ""
  onSubmit(){
this.loginService.login(this.loginModel).subscribe((response)=>{
  this.router.navegateByurl('')
},(respostaErro)=>{
  this.mensagem = respostaErro.error
  console.log(this.respostaErro)
})
}
}
