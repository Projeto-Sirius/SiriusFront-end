import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {



  constructor(

    private http:HttpClient,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }

  getAllProduto():Observable<Produto[]>{
    return this.http.get<Produto[]>('https://siriusprojetodb.herokuapp.com/produto')

  }
  getByIdProduto(id:number):Observable<Produto>{
    return this.http.get<Produto>(`https://siriusprojetodb.herokuapp.com/produto/${id}`,this.token)

  }
  postProduto(produto: Produto):Observable<Produto>{

    return this.http.post<Produto>('https://siriusprojetodb.herokuapp.com/produto',produto,this.token)
  }

  putProduto(produto:Produto):Observable<Produto>{

    return this.http.put<Produto>('https://siriusprojetodb.herokuapp.com/produto',produto,this.token)
  }

  deleteProduto(id: number){
    return this.http.delete(`https://siriusprojetodb.herokuapp.com/produto/${id}`,this.token)
  }  



  
}
