import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from  './login/login.component';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "../shared/service/auth.service";


@NgModule({
    imports: [CommonModule, ReactiveFormsModule , HttpClientModule],
    declarations: [LoginComponent],
    providers: [ AuthService]
})
export class AuthModule { }







