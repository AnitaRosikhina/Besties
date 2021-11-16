import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../shared/services/product.service";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IProduct} from "../../../../shared/models/product.model";
import {LoginModalComponent} from "../../../../shared/components/login-modal/login-modal.component";
import {LoginService} from "../../../../shared/services/login.service";
import {BasketService} from "../../../../shared/services/basket.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDetailsComponent implements OnInit {
  product: IProduct
  count = 1
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private _snackBar: MatSnackBar,
              public dialog: MatDialog,
              private loginService: LoginService,
              private basketService: BasketService) { }

  ngOnInit(): void {
    this.productService.getById(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product
    })
  }

  changeCount(status: boolean) {
    if(status) {
      ++this.count
    }
    else if(!status && this.count > 1) {
      --this.count
    }
  }

  addToBasket() {
    this.basketService.add({
      ...this.product,
      userId: this.loginService.getUserId(),
      amount: this.count
    }).subscribe(() => {
      this._snackBar.open('Product added to cart', 'Close', {
        duration: 3000
      })
    }, () => {
      // logic if not logged in
      if (!this.loginService.getUserId()) {
        this.dialog.open(LoginModalComponent);
        // TODO cdr doesn't work
      }
    })
  }
}
