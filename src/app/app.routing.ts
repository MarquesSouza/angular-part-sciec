import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { TablesComponent } from './layout/tables/tables.component';
import { TypographyComponent } from './layout/typography/typography.component';
import { IconsComponent } from './layout/icons/icons.component';
import { MapsComponent } from './layout/maps/maps.component';
import { NotificationsComponent } from './layout/notifications/notifications.component';
import { UpgradeComponent } from './layout/upgrade/upgrade.component';
import {LoginComponent} from "./auth/login/login.component";

const routes: Routes =[
    { path: 'dashboard',      component: HomeComponent },
    { path: 'login',           component: LoginComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
      { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
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
