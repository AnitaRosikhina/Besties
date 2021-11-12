import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../../admin/pages/product-addition-page/product-addition-page.component";
import {ProductService} from "../../../../shared/services/product.service";
import {SubcategoryService} from "../../../admin/pages/subcategories-addition-page/services/subcategory.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-dogs-page',
  templateUrl: './dogs-page.component.html',
  styleUrls: ['./dogs-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogsPageComponent implements OnInit {

  products$: Observable<IProduct[]>;
  subcategories$: Observable<string[]>;

  constructor(private productsService: ProductService,
              private subcategoryService: SubcategoryService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getByCategory('Dogs')
    this.subcategories$ = this.subcategoryService.getByCategory('Dogs')
      .pipe(map(el => el.map(elem => elem.name)))
  }

  filterBySubcategory(event: string): void {
    this.products$ = this.productsService.getByCategoryAndSubCategory('Dogs', event)
  }
}
