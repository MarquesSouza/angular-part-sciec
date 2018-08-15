import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-minhas-inscricoes',
  templateUrl: './minhas-inscricoes.component.html',
  styleUrls: ['./minhas-inscricoes.component.scss']
})
export class MinhasInscricoesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    public download() {

        var doc = jsPDF('l', 'mm', [210, 150]);
        doc.text(20, 20, 'Hello world!');
        doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        doc.save('Test.pdf');
    }
}
