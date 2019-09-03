import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProducService {

  loading = true;
  products: IProduct[] = [];
  productsFilter: IProduct[] = [];
  produc: IProduct;

  constructor( private http: HttpClient ) {
    this.loadProducts();
   }

  private loadProducts() {

    return new Promise( (resolve, reject) => {

      this.http.get('https://ngportfolio-f20ef.firebaseio.com/productos_idx.json').
      subscribe( (resp: IProduct[]) => {
        this.products = resp;
        this.loading = false;
        resolve();
      });

    });


  }

  getProduct( id: string ) {
    return this.http.get(`https://ngportfolio-f20ef.firebaseio.com/productos/${id}.json`)
  }

  searchProduct(data: string) {

    if ( this.products.length === 0 ) {
      this.loadProducts().then(() => {
        this.filterProduct(data);
      });
    } else {
      this.filterProduct(data);
    }
  }

  private filterProduct(data: string)
  {
    data = data.toLocaleLowerCase();
    this.productsFilter = [];
    this.products.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(data) >= 0 || tituloLower.indexOf(data) >= 0) {
        this.productsFilter.push(prod);
      }
    });
  }
}
