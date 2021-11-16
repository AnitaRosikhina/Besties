import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import {ProductService} from "../../../../shared/services/product.service";
import {SubcategoryService} from "../../../admin/pages/subcategories-addition-page/services/subcategory.service";
import {IProduct} from "../../../../shared/models/product.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-small-animals-page',
  templateUrl: './small-animals-page.component.html',
  styleUrls: ['./small-animals-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallAnimalsPageComponent implements OnInit {

  products$: Observable<IProduct[]>
  subcategories$: Observable<string[]>

  sortBy: string
  filterByPrice

  constructor(private productsService: ProductService,
              private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getByCategory('Small Animals')
    this.subcategories$ = this.subcategoryService.getByCategory('Small Animals')
      .pipe(map(el => el.map(elem => elem.name)))
  }

  filterBySubcategory(event: string): void {
    this.products$ = this.productsService.getByCategoryAndSubCategory('Small Animals', event)
  }
}
