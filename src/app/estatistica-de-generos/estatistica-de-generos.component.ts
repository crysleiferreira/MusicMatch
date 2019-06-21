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
  constructor(private musicas$:MusicasService, private route: ActivatedRoute,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.musicas$.lista()
    .pipe(
      map(musicas => musicas.slice(0, 4))
    )
    .subscribe(musicas => this.musicas = musicas);
  }

}
