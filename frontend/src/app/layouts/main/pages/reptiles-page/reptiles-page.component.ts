import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../../../shared/models/product.model";
import {ProductService} from "../../../../shared/services/product.service";
import {SubcategoryService} from "../../../admin/pages/subcategories-addition-page/services/subcategory.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-reptiles-page',
  templateUrl: './reptiles-page.component.html',
  styleUrls: ['./reptiles-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReptilesPageComponent implements OnInit {

  products$: Observable<IProduct[]>
  subcategories$: Observable<string[]>

  sortBy: string
  filterByPrice

  constructor(private productsService: ProductService,
              private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getByCategory('Reptiles')
    this.subcategories$ = this.subcategoryService.getByCategory('Reptiles')
      .pipe(map(el => el.map(elem => elem.name)))
  }

  filterBySubcategory(event: string): void {
    this.products$ = this.productsService.getByCategoryAndSubCategory('Reptiles', event)
  }
}
