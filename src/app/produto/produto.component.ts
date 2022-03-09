import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  
  produtoService:ProdutoService
  produto:Produto = new Produto()
  listaProdutos:Produto[]
  idProduto: number
  idUser = environment.id

  constructor( private router:Router,
    private route: ActivatedRoute,) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      
      alert('Sua seção expirou,faça o login novamente')
      this.router.navigate(['/entrar'])
      
    }
    
    this.getAllProdutos()
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

  getAllProdutos(){

    this.produtoService.getAllProduto().subscribe((resp:Produto[])=>{
      this.listaProdutos = resp
    })
  }
}
