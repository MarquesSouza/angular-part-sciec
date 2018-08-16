import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import objectContaining = jasmine.objectContaining;
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.component.html',
  styleUrls: ['./detalhes-evento.component.scss']
})
export class DetalhesEventoComponent implements OnInit {
  //  private dataList: Data[] = [];

    constructor(private http: Http) { }
    dteventObj: object = {};
    dtevents : object = {
        atividade: Object(),
        qtd: Object(),
        evento: Object (),
    };

    fetchData = function() {
        this.http.get(`${environment.web_url}/user/event/activity/index?event_id=1`).subscribe(
            (res: Response) => {
                this.dtevents = res.json();
               //   console.log( res.json());
               this.dtevents;
            }

        );

    };

    // addNewDtEvent = function(dtevent) {
    //     this.dteventObj = {
    //         'nome': dtevent.nome,
    //         'descricao': dtevent.descricao,
    //         'local': dtevent.local,
    //         'data_inicio': dtevent.data_inicio,
    //         'data_conclusao': dtevent.data_conclusao,
    //         'situacao': dtevent.situacao,
    //         'status': dtevent.status,
    //         'coordenador': dtevent.coordenador,
    //     };
    //     this.http.post('http://sciec.test/admin/event/store', this.dteventObj).subscribe((res: Response) => {
    //         console.log(res);
    //         this.fetchData();
    //     });
    // };

    ngOnInit() {
        this.fetchData();
    }

}
