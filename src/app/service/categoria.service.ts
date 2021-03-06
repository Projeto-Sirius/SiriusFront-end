import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(

    private http:HttpClient,
    private router:Router,
    private route:ActivatedRoute
    
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }

  getAllCategoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:8080/categoria',this.token)

  }
  getByIdCategoria(id: number):Observable<Categoria>{
    return this.http.get<Categoria>(`http://localhost:8080/tema/${id}`)

  }
  postTema(categoria: Categoria):Observable<Categoria>{

    return this.http.post<Categoria>('http://localhost:8080/categoria',categoria,this.token)
  }

  putTema(categoria:Categoria):Observable<Categoria>{

    return this.http.put<Categoria>('http://localhost:8080/categoria',categoria,this.token)
  }

  deleteCategoria(id: number){
    return this.http.delete(`http://localhost:8080/categoria/${id}`,this.token)
  }

}
