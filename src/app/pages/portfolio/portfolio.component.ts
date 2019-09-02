import { Component, OnInit } from '@angular/core';
import { ProducService } from '../../services/produc.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor( public productService: ProducService ) {

   }

  ngOnInit() {
  }

}
