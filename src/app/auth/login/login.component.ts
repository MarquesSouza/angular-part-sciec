import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/service/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    f:FormGroup;
    errorCredentiasl = false;
    constructor(public router: Router,private formBuilder: FormBuilder,  private authService: AuthService) {}
    ngOnInit() {
        this.f = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]]
        })
    }
    onSubmit() {
        this.authService.login(this.f.value).subscribe(
            (resp) => {
                this.router.navigate(['home']);
            },
            (errorResponse: HttpErrorResponse) => {
                if (errorResponse.status === 401) {
                    this.errorCredentiasl = true;
                }
            }
        );
    }
    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}

