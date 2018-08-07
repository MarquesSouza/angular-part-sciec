import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';

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

        this.http.get('http://sciec.test/admin/event/index').subscribe(
            (res: Response) => {
                this.events = res.json();
                console.log(this.events.data);
            }

        );

    };

    addNewEvent = function(event) {
        this.eventObj = {
            'nome': event.nome,
            'descricao': event.descricao,
            'local': event.local,
            'data_inicio': event.data_inicio,
            'data_conclusao': event.data_conclusao,
            'situacao': event.situacao,
            'status': event.status,
            'institutions_id': event.institutions_id,
            'coordenador': event.coordenador,
        };

        this.http.post('http://sciec.test/org/event/store', this.eventObj).subscribe((res: Response) => {
            console.log(res);
            this.fetchData();
            this.router.navigate(['auth/login']);
        });
    };

    ngOnInit() {
        this.fetchData();

    }

}
