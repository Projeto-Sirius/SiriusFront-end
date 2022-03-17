import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  UserLogin:UsuarioLogin = new UsuarioLogin()
  constructor(
    private router:Router,
    private auth: AuthService,
    private alertas:AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }
 
  entrar(){
    this.auth.entrar(this.UserLogin).subscribe((resp:UsuarioLogin)=>{
      this.UserLogin = resp
      environment.nomeCompleto = this.UserLogin.nomeCompleto
      environment.token = this.UserLogin.token
      environment.senha = this.UserLogin.senha
      environment.usuario = this.UserLogin.usuario
      environment.id = this.UserLogin.id
      environment.foto  = this.UserLogin.foto
      
      console.log(environment.token)
      console.log(environment.nomeCompleto)
      console.log(environment.senha)
      console.log(environment.usuario)
      console.log(environment.id)
      console.log(environment.foto)
      this.router.navigate(['/inicio'])
    },erro =>{
      if(erro.status == 500 || erro.status == 401){
        this.alertas.showAlertDanger('Usuario ou senha estão incorretos!')
      }
    })
  }

}

