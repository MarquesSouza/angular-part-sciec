import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    userObj: object = {};
    messageError;
  constructor( private http: Http , private router: Router) { }
  addUser= function(event){
    this.userObj = {
        'name': event.name,
        'cpf': event.cpf,
        'email': event.email,
        'celular': event.celular,
        'password': event.password,
        'tipousuario': '1',
    };
    this.http.post(`${environment.web_url}/user/auth/register`, this.userObj).subscribe((res: Response) => {
        this.messageError = res.json();
        console.log(this.messageError);
        if ( this.messageError.message === "User created." ) {
            this.router.navigate(['login']);
        }
    });
  }
  ngOnInit(){
  }

}
