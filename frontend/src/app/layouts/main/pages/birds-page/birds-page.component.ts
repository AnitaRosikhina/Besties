import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../../admin/pages/product-addition-page/product-addition-page.component";
import {ProductService} from "../../../../shared/services/product.service";
import {SubcategoryService} from "../../../admin/pages/subcategories-addition-page/services/subcategory.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-birds-page',
  templateUrl: './birds-page.component.html',
  styleUrls: ['./birds-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BirdsPageComponent implements OnInit {

  products$: Observable<IProduct[]>
  subcategories$: Observable<string[]>

  sortBy: string

  constructor(private productsService: ProductService,
              private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getByCategory('Birds')
    this.subcategories$ = this.subcategoryService.getByCategory('Birds')
      .pipe(map(el => el.map(elem => elem.name)))
  }

  filterBySubcategory(event: string): void {
    this.products$ = this.productsService.getByCategoryAndSubCategory('Birds', event)
  }
}
