import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import objectContaining = jasmine.objectContaining;
import {environment} from '../../../environments/environment';
import {count} from 'rxjs/operator/count';
import {AuthService} from '../../shared/service/auth.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-detalhes-evento',
  templateUrl: './detalhes-evento.component.html',
  styleUrls: ['./detalhes-evento.component.scss']
})
export class DetalhesEventoComponent implements OnInit {
  //  private dataList: Data[] = [];

    constructor(public router: Router, private http: Http, private authService: AuthService) { }
    dteventObj: object = {};
    messagem: false;
    res: object = {};
    dtevents: object = {
        atividade: Object(),
        qtd: Object() ,
        evento: Object (),
    };

    fetchData = function() {
        const event = localStorage.getItem('event');
       // localStorage.removeItem('event');
        this.http.get(`${environment.web_url}/user/event/activity/index?event_id=` + event).subscribe(
            (res: Response) => {
                this.dtevents = res.json();
          //       console.log( this.dtevents);
               this.dtevents;
            }

        );

    };

    addNewDtEvent = function(productData) {
        if ( this.authService.getUser() == null ) {
            this.router.navigate(['login']);
        }
        this.dteventObj = {
            'atividade': productData,
            'evento': this.dtevents.evento.id,
            'user': this.authService.getUser().id,
            };
      // console.log(this.dteventObj);
        this.http.post(`${environment.web_url}/user/event/activity/insc`, this.dteventObj).subscribe((res: Response) => {
           if (( res.json() == '1' ) || ( res.json() == '2' )){
               this.router.navigate(['inscricoes']);
           }else{

               this.messagem = true;
               this.res = res.json();
           }



         });
    };
    ngOnInit() {
        this.fetchData();
    }
}
