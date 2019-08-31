import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../classes/product';
import { Store } from '../classes/store';
import { Filter } from '../classes/filter';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  stores: Store[] = [];
  products: Product[] = [];
  catalogUrl = 'http://localhost:3000/Stores';
  genderFilterUrl ='http://localhost:3000/GenderFilter';
  priceFilterUrl = 'http://localhost:3000/PriceFilter';
  
  constructor(private http: HttpClient) { }

  getStores() {
    return this.http.get<Store[]>(this.catalogUrl);
  }

  //get all products
  getProducts(){
    this.getStores().subscribe(
        (data: Store[]) => {
          this.stores = data;          
          this.stores.forEach(store => {
            store.Products.forEach(product => {
              product.StoreName = store.StoreName;//set the storeName for each product
              this.products.push(product);//push the products to the 'global' products
            });
          });
    });
    return of(this.products);
  }

  //get product by ID
  getProduct(id: number): Observable<Product>{
    const url = `${this.catalogUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  //get the options off Gender filter
  getGenderFilter(){
    return this.http.get<Filter[]>(this.genderFilterUrl);
  }

  //get the options off Price filter
  getPriceFilter(){
    return this.http.get<Filter[]>(this.priceFilterUrl);
  }

//get filtered products
  getFilteredProducts(TagGenderId: number,TagPriceId :number){    
    //need to convert TagsId number because it comes as a sting
    TagGenderId = Number(TagGenderId);
    TagPriceId = Number(TagPriceId);

    if(TagGenderId && !TagPriceId){
      return of(this.products.filter(product => product.ProductTags.includes(TagGenderId)));
    }
    else if(TagPriceId && !TagGenderId){
      return of(this.products.filter(product => product.ProductTags.includes(TagPriceId)));
    }
    else  if(TagGenderId && TagPriceId){
      return of(this.products.filter(product => (product.ProductTags.includes(TagGenderId) && product.ProductTags.includes(TagPriceId))));
    }
    return of(this.products);//in case that there is no filter

}
    
}