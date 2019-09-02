import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: IInfoPage = {};
  team: any[] = [];
  cargada = false;

  constructor( private http: HttpClient ) {
    this.loadInfoPage();
    this.loadTeam();
  }

  private loadInfoPage() {
    this.http.get('assets/data/data-page.json').
    subscribe( (resp: IInfoPage) => {
      this.info = resp;
      this.cargada = true;
    });
  }

  private loadTeam() {
    this.http.get('https://ngportfolio-f20ef.firebaseio.com/equipo.json').
    subscribe( (resp: any[]) => {
      this.team = resp;
      this.cargada = true;
    });
  }

}
