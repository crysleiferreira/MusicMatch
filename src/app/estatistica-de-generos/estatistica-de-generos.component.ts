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
  lista = null;
  constructor(private musicas$:MusicasService, private route: ActivatedRoute,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.musicas$.lista()
    .pipe(
      map(musicas => musicas) //musicas.slice(0, 99)
    )
    .subscribe(musicas => this.musicas = musicas);
  }

  maiorMusica(){
    let cont = 0;
    let lista = null;
    for(let musica of this.musicas){
      if(musica.gostar > cont ){
        cont = musica.gostar;
        lista = musica.titulo;
      }
    }
    return lista;
  };
  ranking(){
    const ordenadas = this.musicas.sort((m1, m2) => m2.gostar - m1.gostar).slice(0,5);
    return ordenadas;
  };
  generoMaiorCurtida(){
    let lista = {
      'sambaraiz' : 0,
      'pop':0,
      'gospel':0,
      'bossa': 0
    };
    let listaGenero = [];
    for(let artista of this.musicas){
      if(artista.genero.nome === 'Samba de Raiz'){
        lista['sambaraiz'] += artista.gostar;
      } else if(artista.genero.nome === 'Pop Brasil'){
        lista['pop'] += artista.gostar;
      } else if(artista.genero.nome === 'Sucessos Gospel'){
        lista['gospel'] += artista.gostar;
      } else if(artista.genero.nome === 'Bossa Nova'){
        lista['bossa'] += artista.gostar;
      }
    }
    listaGenero.push({'nome': 'Bossa Nova', 'quantidade': lista.bossa});
    listaGenero.push({'nome': 'Samba de Raiz', 'quantidade': lista.sambaraiz});
    listaGenero.push({'nome':'Pop Brasil','quantidade': lista.pop});
    listaGenero.push({'nome': 'Sucessos Gospel', 'quantidade': lista.gospel});
    return listaGenero.sort((m1, m2) => m2.quantidade - m1.quantidade);
  }
  

}
