import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProducService {

  loading = true;
  products: IProduct[] = [];

  constructor( private http: HttpClient ) {
    this.loadProducts();
   }

  private loadProducts() {
    this.http.get('https://ngportfolio-f20ef.firebaseio.com/productos_idx.json').
    subscribe( (resp: IProduct[]) => {
      this.products = resp;
      console.log(this.products);
      this.loading = false;
    });
  }

}
