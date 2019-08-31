import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../classes/filter';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  genderFilter: Filter[];  
  priceFilter: Filter[];
  @Output() filterByGender = new EventEmitter<number>();
  @Output() filterByPrice = new EventEmitter<number>();  


  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.getGenderFilter();
    this.getPriceFilter();
  }

  getGenderFilter(){
    this.catalogService.getGenderFilter().subscribe(
      (data: Filter[]) => this.genderFilter = data); 
  }

  getPriceFilter(){
    this.catalogService.getPriceFilter().subscribe(
      (data: Filter[]) => this.priceFilter = data); 
   }

   OnFilterByGender(TagId: number){
    this.filterByGender.emit(TagId);
  }

   OnFilterByPrice(TagId: number){
    this.filterByPrice.emit(TagId);
   }


}
