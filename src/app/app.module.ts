import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './layout/sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';
import { CommonModule} from "@angular/common";
import  {AuthModule} from "./auth/auth.module";
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './layout/user/user.component';
import { TablesComponent } from './layout/tables/tables.component';
import { TypographyComponent } from './layout/typography/typography.component';
import { IconsComponent } from './layout/icons/icons.component';
import { MapsComponent } from './layout/maps/maps.component';
import { NotificationsComponent } from './layout/notifications/notifications.component';
import { UpgradeComponent } from './layout/upgrade/upgrade.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecoverPasswordComponent } from './auth/recover-password/recover-password.component';
import { LayoutComponent} from "./layout/layout.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {TokenInterceptor} from "./shared/interceptors/token.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {RefreshTokenInterceptor} from "./shared/interceptors/refresh-token.interceptor";
import { ValidaCertificadoComponent } from './valida-certificado/valida-certificado.component';
import { ParticipanteComponent } from './participante/participante.component';
import {DetalhesEventoComponent} from './home/detalhes-evento/detalhes-evento.component';
import {PerfilComponent} from './participante/perfil/perfil.component';
import {MinhasInscricoesComponent} from './participante/minhas-inscricoes/minhas-inscricoes.component';
import {CertificadoComponent} from './participante/certificado/certificado.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    //LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    LayoutComponent,
    ValidaCertificadoComponent,
    ParticipanteComponent,
    DetalhesEventoComponent,
      PerfilComponent,
      MinhasInscricoesComponent,
      CertificadoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    LbdModule,
      CommonModule,
      AuthModule
  ],
  providers: [
      AuthGuard,
      {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
      /*{provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true }*/

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
