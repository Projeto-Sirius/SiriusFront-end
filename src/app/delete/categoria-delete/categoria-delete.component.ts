import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = new Categoria()
  idCategoria:number
  constructor(
    private router:Router,
    private temaService:CategoriaService,
    private route: ActivatedRoute,
    private alertas:AlertasService
  ) { }

  ngOnInit(){
    if(environment.token='')
    this.router.navigate(['/entrar'])

    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdTema(this.idCategoria)
  } 

  findByIdTema(id:number){
    this.temaService.getByIdCategoria(id).subscribe((resp:Categoria)=>{
      this.categoria = resp
  })
  }

  apagar(){
    this.temaService.deleteCategoria(this.idCategoria).subscribe(() =>{
      this.alertas.showAlertSucess('Tema apagado com sucesso')
      this.router.navigate(['/categoria'])
    })
  }

}
