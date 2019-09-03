import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { IInfoPage } from '../../interfaces/info-page.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  infoPaginaService: InfoPaginaService;

  constructor(
    service: InfoPaginaService,
    private router: Router
    ) {
    this.infoPaginaService = service;
  }

  ngOnInit() {
  }

  searchProduct( data: string ) {

    if(data.length === 0) {
      return;
    }

    this.router.navigate(['/search', data]);

  }
}
