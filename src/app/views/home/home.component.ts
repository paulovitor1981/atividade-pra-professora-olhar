import { Component, OnInit } from '@angular/core';
import {  Noticias } from 'src/app/models/noticias';
import { User } from 'src/app/models/user';

import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private noticiasService: NoticiasService)  { }

  listaNoticias = [] as Noticias []

  ngOnInit(): void {
    this.carregarNoticias()
  }
 carregarNoticias(){
 this.noticiasService.getNoticia().subscribe( (noticiaRecebidas: Noticias[]) => {
   this.listaNoticias = noticiaRecebidas;
   console.log(this.listaNoticias);
 })
 }
}

