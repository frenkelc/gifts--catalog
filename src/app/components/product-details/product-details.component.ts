import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { CatalogService } from '../../services/catalog.service';
import { Product } from '../../classes/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
//This component is not necessary for the project.
export class ProductDetailsComponent implements OnInit, OnDestroy {
  @Input()product: Product;
  parentRouteId: number;
  private sub: any;
  str:string;

  constructor(
    private catalogService: CatalogService, 
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit() {
    this.getProductId();
    this.getProduct();
  }
  getProductId(){
    this.route.params.subscribe((params: any) => {
     this.parentRouteId = +params['id'] || 0;
      });
  }
 
  getProduct(){
    this.catalogService.getProduct(this.parentRouteId)
    .subscribe((product: Product) => this.product = product);
  }

  back(){
    //Does not work since it is not relevant to the project
   this.router.navigate(['../']);
    //this._location.back();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
