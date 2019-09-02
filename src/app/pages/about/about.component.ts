import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  infoService: InfoPaginaService;

  constructor(service: InfoPaginaService) {
    this.infoService = service;
   }

  ngOnInit() {
  }

}
