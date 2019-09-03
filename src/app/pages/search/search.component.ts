import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProducService } from '../../services/produc.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    public productService: ProducService
     ) { }

  ngOnInit() {
     this.router.params
     .subscribe( params => {
      console.log(params['data']);
      this.productService.searchProduct(params['data']);
     });
     
  }

}
