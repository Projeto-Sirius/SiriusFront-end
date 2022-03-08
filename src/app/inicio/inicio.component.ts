import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  categoriaService:CategoriaService
  produtoService:ProdutoService
  produto:Produto = new Produto()
  listaProdutos:Produto[]
  listaCategoria:Categoria[]

  constructor(

    private router:Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(){

    if(environment.token == ''){
      
      alert('Sua seção expirou,faça o login novamente')
      this.router.navigate(['/entrar'])
      
    }
    this.findAllCategoria()
  }

  findAllCategoria(){

    this.categoriaService.getAllCategoria().subscribe((resp:Categoria[]) =>{
        this.listaCategoria = resp
    })

  }

  findAllProdutos(){

    this.produtoService.getAllProduto().subscribe((resp:Produto[])=>{
      this.listaProdutos = resp
    })
  }

  
  


}
