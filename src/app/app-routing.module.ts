import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicaComponent } from './musica/musica.component';
import { MusicasComponent } from './musicas/musicas.component';
import { ArtistaComponent } from './artista/artista.component';
import { GeneroComponent } from './genero/genero.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

const routes: Routes = [
  {path: 'artistas/:id', component: ArtistaComponent},
  { path: 'generos', component: MusicasComponent },
  { path: 'musicas/:id', component: MusicaComponent },
  { path: 'generos/:id', component: GeneroComponent},
  { path: '', component: HomeComponent },
  { path: 'pesquisa', component: PesquisaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
