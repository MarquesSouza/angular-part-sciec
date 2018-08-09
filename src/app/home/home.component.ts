import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import {Http, Response} from "@angular/http";
import {getResponseURL} from "@angular/http/src/http_utils";
import {environment} from '../../environments/environment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private http: Http) { }
    eventObj: object = {};
    events = [];
    fetchData = function() {

        this.http.get(`${environment.web_url}/user/event/index`).subscribe(
            (res: Response) => {
                this.events = res.json();
                console.log(this.events.data);
            }

        );

    };

    public redirecionar(values) {
        var url = '/detalhes-evento/' + values;
        console.log(values)
        window.location.href = url;
    }

    ngOnInit() {
        this.fetchData();

    }


}
