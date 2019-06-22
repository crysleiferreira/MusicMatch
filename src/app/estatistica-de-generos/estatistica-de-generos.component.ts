import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { map, mergeAll } from 'rxjs/operators';
import { MusicasService } from '../musicas.service';

@Component({
  selector: 'app-estatistica-de-generos',
  templateUrl: './estatistica-de-generos.component.html',
  styleUrls: ['./estatistica-de-generos.component.css']
})
export class EstatisticaDeGenerosComponent implements OnInit {
  musicas = null;
  lista = []
  constructor(private musicas$:MusicasService, private route: ActivatedRoute,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.musicas$.lista()
    .pipe(
      map(musicas => musicas) //musicas.slice(0, 99)
    )
    .subscribe(musicas => this.musicas = musicas);
  }

  listaRanking(){
    let cont = 0;
    let music = {nome: null, 
    view: 0};

    for(let musica of this.musicas){
      if(musica.gostar > cont ){
        cont = musica.gostar;
        music['nome'] = musica.titulo;
        music['view'] = musica.gostar;
        this.lista.push(music)
      }
    }
    return this.lista;
  };
  ranking(){
    const ordenadas = this.musicas.sort((m1, m2) => m2.gostar - m1.gostar);
    return ordenadas;
  }



}
