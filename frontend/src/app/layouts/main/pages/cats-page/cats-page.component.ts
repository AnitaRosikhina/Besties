import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../../admin/pages/product-addition-page/product-addition-page.component";
import {ProductService} from "../../../../shared/services/product.service";
import {SubcategoryService} from "../../../admin/pages/subcategories-addition-page/services/subcategory.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-cats-page',
  templateUrl: './cats-page.component.html',
  styleUrls: ['./cats-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatsPageComponent implements OnInit {

  products$: Observable<IProduct[]>;
  subcategories$: Observable<string[]>;

  constructor(private productsService: ProductService, private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getByCategory('Cats')
    this.subcategories$ = this.subcategoryService.getByCategory('Cats')
      .pipe(map(el => el.map(elem => elem.name)))
  }

}
