import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: IInfoPage = {};
  cargada = false;

  constructor( private http: HttpClient ) {
    this.http.get('assets/data/data-page.json').
    subscribe( (resp: IInfoPage) => {
      this.info = resp;
      this.cargada = true;
      console.log(resp);
    });

  }
}
