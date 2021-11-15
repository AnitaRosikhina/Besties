import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ProductService} from "../../../../shared/services/product.service";
import {SubcategoryService} from "../../../admin/pages/subcategories-addition-page/services/subcategory.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {IProduct} from "../../../../shared/models/product.model";

@Component({
  selector: 'app-fish-and-aquatics-page',
  templateUrl: './fish-and-aquatics-page.component.html',
  styleUrls: ['./fish-and-aquatics-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FishAndAquaticsPageComponent implements OnInit {

  products$: Observable<IProduct[]>
  subcategories$: Observable<string[]>

  sortBy: string

  constructor(private productsService: ProductService,
              private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getByCategory('Fish')
    this.subcategories$ = this.subcategoryService.getByCategory('Fish')
      .pipe(map(el => el.map(elem => elem.name)))
  }

  filterBySubcategory(event: string): void {
    this.products$ = this.productsService.getByCategoryAndSubCategory('Fish', event)
  }
}
