import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { AlertasService } from 'src/app/service/alertas.service';
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
    private produtoService:ProdutoService,
    private route: ActivatedRoute,
    private alertas:AlertasService
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

  apagar(){
    this.produtoService.deleteProduto(this.idProduto).subscribe(() =>{
      this.alertas.showAlertSucess('Produto apagado com sucesso !')
      this.router.navigate(['/produto'])
    })
  }

}
