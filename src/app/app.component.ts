import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {products, products as data} from './data/products'
import {ProductService} from "./services/product.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'main page'
  // products: IProduct[] = []
  loading: boolean
  products$: Observable<IProduct[]>
  term = ''

  constructor(private productsService: ProductService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products
    //   this.loading = false
    // })
  }


}
