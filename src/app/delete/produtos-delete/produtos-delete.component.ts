import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produtos-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.css']
})
export class ProdutosDeleteComponent implements OnInit {

  produto: Produto = new Produto()
  idProduto:number
  constructor(
    private router:Router,
    private temaService:ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token='')
    this.router.navigate(['/entrar'])

    this.idProduto = this.route.snapshot.params['id']
    this.findByIdTema(this.idProduto)
  } 

  findByIdTema(id:number){
    this.temaService.getByIdProduto(id).subscribe((resp:Produto)=>{
      this.produto = resp
  })
  }

  apagar(){
    this.temaService.deleteProduto(this.idProduto).subscribe(() =>{
      alert('Produto apagado com sucesso !')
      this.router.navigate(['/produto'])
    })
  }

}
