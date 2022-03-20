import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-fix',
  templateUrl: './produto-fix.component.html',
  styleUrls: ['./produto-fix.component.css']
})
export class ProdutoFixComponent implements OnInit {
  produto:Produto = new Produto()
  listaProdutos:Produto[]
  constructor(
    private route: ActivatedRoute,
    private produtoService:ProdutoService,
    private router:Router
  ) { }

  ngOnInit(){
    this.getAllProdutos()
  }

  getAllProdutos(){

    this.produtoService.getAllProduto().subscribe((resp:Produto[])=>{
      this.listaProdutos = resp
    })


  }

}
