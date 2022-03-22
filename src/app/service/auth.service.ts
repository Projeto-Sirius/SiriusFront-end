import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UsuarioLogin } from '../model/UsuarioLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    
    private http: HttpClient
  ) { }


  entrar(userLogin:UsuarioLogin): Observable<UsuarioLogin>{
      return this.http.post<UsuarioLogin>('https://siriusprojetodb.herokuapp.com/usuarios/logar',userLogin)
  }

  cadastrar(User:User):Observable<User>{
      return this.http.post<User>('https://siriusprojetodb.herokuapp.com/usuarios/cadastrar',User)
  }

  

  logado(){
    let ok: boolean= false

    if(environment.token != ''){
      ok = true
    }
    return ok
    
  }
}
