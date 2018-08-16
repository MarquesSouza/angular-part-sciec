import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import {Http, Response} from '@angular/http';
import {environment} from '../../../environments/environment';
@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss']
})
export class CertificadoComponent implements OnInit {

  constructor(private http: Http) { }
    certificadoObj: object = {};
    certificado ;


    fetchData = function() {
        this.http.get(`${environment.web_url}/user/event/certificate?event_id=1&user_id=1`).subscribe(
            (res: Response) => {
                this.certificado = res.json();
                console.log( this.certificado);
                this.certificado;
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
    public download() {

        var doc = jsPDF('l', 'mm', [210, 150]);
        doc.text(20, 20, 'Hello world!');
        doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        doc.save('Test.pdf');
    }

}
