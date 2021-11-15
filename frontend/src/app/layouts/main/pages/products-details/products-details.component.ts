import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../shared/services/product.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IProduct} from "../../../../shared/models/product.model";

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDetailsComponent implements OnInit {
  product$: Observable<IProduct>
  count = 1
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.product$ = this.productService.getById(this.activatedRoute.snapshot.paramMap.get('id'))
  }

  changeCount(status: boolean) {
    if(status) {
      ++this.count
    }
    else if(!status && this.count > 1) {
      --this.count
    }
  }

  openSnackBar() {
    this._snackBar.open('Product added to cart', '', {
      duration: 3000
    })
  }
}
