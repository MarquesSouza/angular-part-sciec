import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import {Http, Response} from '@angular/http';
import {environment} from '../../../environments/environment';
import {AuthService} from '../../shared/service/auth.service';
import {forEach} from '@angular/router/src/utils/collection';

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
      //  localStorage.removeItem('idevent');
        var user = this.authService.getUser().id;
        this.http.get(`${environment.web_url}/user/event/certificate?event_id=`+event+`&user_id=`+user).subscribe(
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
    public gerar(nome, cpf, atividade, evento, inicio, fim, tipo, horas) {

        var v = cpf;
        v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
        v=v.replace(/(\d{3})(\d)/,"$1.$2");

        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d)/,"$1.$2");

        //Coloca um hífen entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");


        var doc = jsPDF('l', 'mm', [210, 150]);
        var reportTitle = 'Certificamos que '+nome+' inscrito no CPF: '+v+' participou do evento '+evento+' na atividade '+atividade+' como '+tipo+' com carga horaria de '+horas+' horas';
      //  doc.text(20, 20, 'Hello world!');
     //   var splitTitle = doc.splitTextToSize(reportTitle, 180);
     //   doc.text(15, 20, splitTitle);
        doc.setFillColor(56, 0,26,0);
        doc.rect(0, 0, 210, 150, "F");
     //   doc.addImage('assets/Imagens/ifpe.png', 'PNG', 50, 2);
        doc.addImage('assets/Imagens/ifpe.png', 95, 10, 20, 20);
        var lMargin=15; //left margin in mm
        var rMargin=15; //right margin in mm
        var pdfInMM=210;  // width of A4 in mm
        var pageCenter=pdfInMM/2;

        var lines =doc.splitTextToSize(reportTitle, (pdfInMM-lMargin-rMargin));
        doc.text(lines,pageCenter,50,'center');

        doc.save('Test.pdf');
    }

}
