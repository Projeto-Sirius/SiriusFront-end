import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutosDeleteComponent } from './delete/produtos-delete/produtos-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [{ path:'', redirectTo:'entrar', pathMatch:'full'},
{ path:'entrar', component: EntrarComponent},
{ path:'cadastrar', component: CadastrarComponent },
{path:'inicio',component:InicioComponent},
{path:'tema-edit/:id',component:CategoriaEditComponent},
{path:'tema-delete/:id',component:CategoriaDeleteComponent},
{path:'produtos-edit/:id',component:ProdutosEditComponent},
{path:'produtos-delete/:id',component:ProdutosDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
