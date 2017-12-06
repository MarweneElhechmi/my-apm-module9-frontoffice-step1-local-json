import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../domain/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  pageTitle: string = 'Product List';
  // tslint:disable-next-line:no-inferrable-types
  imageWidth: number = 50;
  // tslint:disable-next-line:no-inferrable-types
  imageMargin: number = 2;
  // tslint:disable-next-line:no-inferrable-types
  showImage: boolean = false;

  listFilter: string;
  errorMessage: string;

  products: IProduct[];

  constructor(private _productService: ProductService) {

  }

  toggleImage(): void {
      this.showImage = !this.showImage;
  }

  ngOnInit(): void {
      this._productService.getProducts()
              .subscribe(products => this.products = products,
                         error => this.errorMessage = <any>error);
  }

  onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;
  }

}
