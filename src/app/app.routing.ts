import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import {LoginComponent} from './auth/login/login.component';
import {ValidaCertificadoComponent} from './valida-certificado/valida-certificado.component';
import {DetalhesEventoComponent} from './home/detalhes-evento/detalhes-evento.component';
import {MinhasInscricoesComponent} from './participante/minhas-inscricoes/minhas-inscricoes.component';
import {PerfilComponent} from './participante/perfil/perfil.component';
import {RecoverPasswordComponent} from './auth/recover-password/recover-password.component';
import {RegisterComponent} from './auth/register/register.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {CertificadoComponent} from './participante/certificado/certificado.component';

const routes: Routes =[
    { path: 'perfil',           component: PerfilComponent  ,           canActivate: [AuthGuard] },
    { path: 'certificado',      component: CertificadoComponent ,       canActivate: [AuthGuard] },
    { path: 'inscricoes',       component: MinhasInscricoesComponent,   canActivate: [AuthGuard] },
    { path: 'home',             component: HomeComponent },
    { path: 'login',            component: LoginComponent },
    { path: 'valida',           component: ValidaCertificadoComponent },
    { path: 'register',         component: RegisterComponent },
    { path: 'recover',          component: RecoverPasswordComponent },
    {path: 'detalhes-evento',   component: DetalhesEventoComponent},
    { path: '',                 redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
