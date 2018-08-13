import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/service/auth.service';
import {HttpClient} from '@angular/common/http';
import{environment} from '../../environments/environment';
import{User} from '../shared/interface/user';
@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.scss']
})
export class ParticipanteComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService , private http: HttpClient) { }
  ngOnInit() {
      this.http.get<any>(`${environment.api_url}/auth/me`).subscribe(data => {
          this.user = data.user;
      });
  }
}
