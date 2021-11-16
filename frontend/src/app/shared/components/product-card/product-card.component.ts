import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProductModalComponent} from "../product-modal/product-modal.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IProduct} from "../../models/product.model";
import {BasketService} from "../../services/basket.service";
import {LoginService} from "../../services/login.service";
import {LoginModalComponent} from "../login-modal/login-modal.component";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct
  count = 1;

  constructor(public dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private loginService: LoginService,
              private basketService: BasketService) { }

  ngOnInit(): void {
  }

  changeCount(product: IProduct, increase: boolean) {
    if(increase) {
      ++this.count
    } else if(!increase && this.count > 1) {
      --this.count
    }
  }

  openDialog() {
    this.dialog.open(ProductModalComponent, {
      data: {
        product: this.product
      }
    });
  }

  addToBasket(): void {
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
