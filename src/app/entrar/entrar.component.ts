import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  UserLogin:UsuarioLogin = new UsuarioLogin
  constructor(
    private router:Router,
    private auth: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.UserLogin).subscribe((resp:UsuarioLogin)=>{
      this.UserLogin = resp
      environment.token = this.UserLogin.token
      environment.imagem = this.UserLogin.imagem
      environment.id = this.UserLogin.id
      environment.nome = this.UserLogin.nome

      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.imagem)
      console.log(environment.id)
      this.router.navigate(['/inicio'])
    },erro =>{
      if(erro.status == 500){
        alert('Usuario ou senha estão incorretos!')
      }
    })
  }

}

