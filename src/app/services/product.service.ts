import { Injectable } from '@angular/core';

// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';  // Since 4.3

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { IProduct } from '../domain/product';

@Injectable()
export class ProductService {
    private _productUrl = './assets/api/products/products.json';

    constructor(private _http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
           // .map((response: Response) => <IProduct[]> response.json())  // No more needed since 4.3
            .do(data => console.log('All: ' +  JSON.stringify(data)))
          .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.of(error);
    }

}
