import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import {LoginComponent} from './auth/login/login.component';
import {ValidaCertificadoComponent} from './valida-certificado/valida-certificado.component';
import {DetalhesEventoComponent} from './home/detalhes-evento/detalhes-evento.component';

const routes: Routes =[
    { path: 'home',      component: HomeComponent },
    { path: 'login',           component: LoginComponent },
    { path: 'valida',          component: ValidaCertificadoComponent },
    {path: 'detalhes-evento',        component: DetalhesEventoComponent},
      { path: '',          redirectTo: 'home', pathMatch: 'full' },

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
