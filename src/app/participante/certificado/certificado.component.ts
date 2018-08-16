import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import {Http, Response} from '@angular/http';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../shared/service/auth.service';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.scss']
})
export class CertificadoComponent implements OnInit {

  constructor(private http: Http,  private authService: AuthService) { }
    certificadoObj: object = {};
    certificado ;


    fetchData = function() {
      var event = localStorage.getItem('idevent');
        localStorage.removeItem('idevent');
        var user = this.authService.getUser().id;
        this.http.get(`${environment.web_url}/user/event/certificate?event_id=`+event+`&user_id=`+user).subscribe(
            (res: Response) => {
                this.certificado = res.json();
              //  console.log( this.certificado);
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
