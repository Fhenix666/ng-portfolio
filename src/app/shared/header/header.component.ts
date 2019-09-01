import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { IInfoPage } from '../../interfaces/info-page.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  infoPaginaService: InfoPaginaService;

  constructor( service: InfoPaginaService ) {
    this.infoPaginaService = service;
  }

  ngOnInit() {
  }

}
