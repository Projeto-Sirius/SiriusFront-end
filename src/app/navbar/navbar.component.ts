import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

 


  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.foto = ''
    environment.nomeCompleto = ''
    environment.id = 0
  }

}