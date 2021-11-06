import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IProduct} from "../../../admin/pages/product-addition-page/product-addition-page.component";
import {ProductService} from "../../../../shared/services/product.service";

@Component({
  selector: 'app-dogs-page',
  templateUrl: './dogs-page.component.html',
  styleUrls: ['./dogs-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogsPageComponent implements OnInit {
  products$: Observable<IProduct[]>;

  private readonly category = 'Dogs'
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.getByCategory(this.category)
  }

}
