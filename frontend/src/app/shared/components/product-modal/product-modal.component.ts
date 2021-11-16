import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {IProduct} from "../../models/product.model";
import {LoginModalComponent} from "../login-modal/login-modal.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginService} from "../../services/login.service";
import {BasketService} from "../../services/basket.service";

interface DialogData {
  product: IProduct
}

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductModalComponent implements OnInit {

  count = 1

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              public dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private loginService: LoginService,
              private basketService: BasketService) {}

  ngOnInit(): void {
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
      ...this.data.product,
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
