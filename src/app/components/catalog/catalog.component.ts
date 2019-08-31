import { Component, OnInit, Input } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { Product } from '../../classes/product';
import { Store } from '../../classes/store';
import { FilterComponent } from '../filter/filter.component';;


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit  {
  @Input()catalog: Product[] = [];
  selectedGenderTagId: number = undefined;
  selectedPriceTagId: number = undefined;

  constructor(private catalogService: CatalogService) { 
  }

  ngOnInit() {
    this.showCatalog();
  }

  showCatalog(): void {
  this.catalogService.getProducts().subscribe(
    (data: Product[]) => this.catalog = data);   
  }

  onFilteredByGender(TagId: number){
    this.selectedGenderTagId = TagId;
    this.catalogService.getFilteredProducts(this.selectedGenderTagId, this.selectedPriceTagId).subscribe( 
     (data: Product[]) => this.catalog = data); 
   }

  onFilteredByPrice(TagId: number){
    this.selectedPriceTagId = TagId;
    this.catalogService.getFilteredProducts(this.selectedGenderTagId, this.selectedPriceTagId).subscribe(
      (data: Product[]) => this.catalog = data);
  }
 
}