import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
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
    private alertas:AlertasService
  ) { }

  ngOnInit(

    
  ){

   

    
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
  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.foto = ''
    environment.nomeCompleto = ''
    environment.id = 0
  }

  
  


}
