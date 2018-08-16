import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.component.html',
  styleUrls: ['./detalhes-evento.component.scss']
})
export class DetalhesEventoComponent implements OnInit {
  //  private dataList: Data[] = [];

    constructor(private http: Http) { }
    dteventObj: object = {};

    dtevents;
    fetchData = function() {
        this.http.get(`http://localhost/sciec-server/public/user/event/activity/index?event_id=1`).subscribe(
            (res: Response) => {
               // this.dtevents = res.json();
                  console.log(  res.json());
              //  console.log(this.dtevents.data);
            }

        );

    };

    addNewDtEvent = function(dtevent) {
        this.dteventObj = {
            'nome': dtevent.nome,
            'descricao': dtevent.descricao,
            'local': dtevent.local,
            'data_inicio': dtevent.data_inicio,
            'data_conclusao': dtevent.data_conclusao,
            'situacao': dtevent.situacao,
            'status': dtevent.status,
            'coordenador': dtevent.coordenador,
        };
        this.http.post('http://sciec.test/admin/event/store', this.dteventObj).subscribe((res: Response) => {
            console.log(res);
            this.fetchData();
        });
    };

    ngOnInit() {
        this.fetchData();
    }

}
