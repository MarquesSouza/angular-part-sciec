import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/interface/user';
import {AuthService} from '../../shared/service/auth.service';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
    user: User;

    constructor(private authService: AuthService, private http: HttpClient) { }

    ngOnInit() {
        this.http.get<any>(`${environment.api_url}/auth/me`).subscribe(data => {
            this.user = data.user;
            console.log(this.user);
        });
    }

}
