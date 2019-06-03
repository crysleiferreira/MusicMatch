import { Component, OnInit } from '@angular/core';
import { DiscoService } from '../disco.service';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent implements OnInit {
  generos = [];
  constructor(private disco: DiscoService) { }
  salvarGenero(nome,id){ 
    this.disco.pegarGeneros(nome,id);

  }
  ngOnInit() {
    this.generos = this.disco.listaDeGeneros();
  }

}
