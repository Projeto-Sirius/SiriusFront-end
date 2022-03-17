import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  idProduto:number
  constructor(
    private router:Router,
    private produtoService:ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token='')
    this.router.navigate(['/entrar'])

    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
  } 

  findByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp:Produto)=>{
      this.produto = resp
  })

}
  
  comprar(){

    alert('compra realizada com sucesso')

  }

  
  }

  


