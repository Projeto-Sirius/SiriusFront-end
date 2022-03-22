import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {
  categoria:Categoria = new Categoria()
  
  constructor(
  
   private router:Router,
   private route:ActivatedRoute,
   private categoriaService:CategoriaService,
   private alertas:AlertasService
  ) { }

  ngOnInit(){

    if(environment.token = ''){
      this.router.navigate(['/entrar'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id:number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) =>{
      this.categoria = resp
    })

  }

  atualizar(){
    
    this.categoriaService.putCategoria(this.categoria).subscribe((resp:Categoria) =>{

      this.categoria = resp
      this.alertas.showAlertSucess('Categoria atualizado com sucesso')
      this.router.navigate(['/categoria'])
    })
  }

}
