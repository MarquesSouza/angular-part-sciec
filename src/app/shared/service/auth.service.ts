import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import  "rxjs/add/operator/do";
import {User} from "../interface/user";
@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private router: Router) { }
    user;
    check(): boolean {
        return localStorage.getItem('user') ? true : false;
    }

    login(credentials: { email: string, password: string }): Observable<boolean> {
        return this.http.post<any>(`${environment.api_url}/auth/login`, credentials)
            .do(data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', btoa(JSON.stringify(data.user)));
                console.log(data.user);

            });
    }

    logout(): void {
        this.http.get(`${environment.api_url}/auth/logout`).subscribe(resp => {
            //console.log(resp);
            localStorage.clear();
            this.router.navigate(['home']);
        });
    }

    getUser(): User {

        return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
    }

    setUser(): Promise<boolean> {
        return this.http.get<any>(`${environment.api_url}/auth/me`).toPromise()
            .then(data => {
                if (data.user) {
                    localStorage.setItem('user', btoa(JSON.stringify(data.user)));
                    return true;
                }
                return false;
            });
    }


}