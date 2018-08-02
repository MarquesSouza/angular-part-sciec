import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesEventoComponent } from './detalhes-evento/detalhes-evento.component';
import { MinhasInscricoesComponent } from './minhas-inscricoes/minhas-inscricoes.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DetalhesEventoComponent, MinhasInscricoesComponent, PerfilComponent]
})
export class ParticipanteModule { }
