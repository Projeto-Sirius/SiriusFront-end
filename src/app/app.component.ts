import { Component, NgModule } from '@angular/core';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RodapeComponent } from './rodape/rodape.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  declarations:[
    AppComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    NavbarComponent
  ]

})
export class AppComponent {
  title = 'Sirius';
}
