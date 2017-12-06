import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; // since 4.3

import { AppComponent } from './app.component';
import { ProductFilterPipe } from './filters/product.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StarComponent } from './components/shared/star/star.component';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductFilterPipe,
    ProductListComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
