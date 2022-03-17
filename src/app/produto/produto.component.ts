import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';

import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  
  categoria:Categoria = new Categoria()
  produto:Produto = new Produto()
  listaProdutos:Produto[]
  listaCategoria:Categoria[]
  idProduto: number
  idUser = environment.id
  idCategoria: number
  user:User = new User

  constructor( private router:Router,
    
    private produtoService:ProdutoService,
    private categoriaService: CategoriaService,
    private authService:AuthService,
    private alertas:AlertasService
    ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      
      this.alertas.showAlertInfo('Sua seção expirou,faça o login novamente')
      this.router.navigate(['/entrar'])
      
    }
    
    this.getAllProdutos()
    this.findAllCategoria()
  }

  findAllCategoria(){

    this.categoriaService.getAllCategoria().subscribe((resp:Categoria[])=>{
      this.listaCategoria = resp
    })
  }

  findAllProdutos(){

    this.produtoService.getAllProduto().subscribe((resp:Produto[])=>{
      this.listaProdutos = resp
    })
  }

  findByIdProdutos(){

    this.produtoService.getByIdProduto(this.idProduto).subscribe((resp:Produto)=>{
      this.produto = resp
    })

  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp:Categoria)=>{
      this.categoria = resp
    })
  }

  getAllProdutos(){

    this.produtoService.getAllProduto().subscribe((resp:Produto[])=>{
      this.listaProdutos = resp
    })
  }
  publicar(){

    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.user.id = this.idUser
    this.produto.usuario = this.user

    this.produtoService.postProduto(this.produto).subscribe((resp:Produto) =>{
    this.produto = resp
    this.alertas.showAlertSucess('Produto cadastrado com sucesso!')})

    this.getAllProdutos()
    
  }
}
