import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../classes/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
//In this component there is a code for routing.
//in case you want to see 'ProductDetailsComponent' you have to cancel the comment of <a> tag in the html of 'ProductComponent'.
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  private sub: any;
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
