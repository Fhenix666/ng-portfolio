import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProducService } from '../../services/produc.service';
import { IProductDes } from '../../interfaces/product-desc.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: IProductDes;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private producService: ProducService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.producService.getProduct(params[ 'id' ])
      .subscribe( (produc: IProductDes) => {
        this.id = params['id'];
        this.product = produc;
      });
    });
  }

}
