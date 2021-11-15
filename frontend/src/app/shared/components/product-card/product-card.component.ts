import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProductModalComponent} from "../product-modal/product-modal.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IProduct} from "../../models/product.model";

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
              private _snackBar: MatSnackBar) { }

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
    const dialogRef = this.dialog.open(ProductModalComponent, {
      data: {
        product: this.product
      }
    });

    dialogRef.afterClosed().subscribe();
  }

  openSnackBar() {
    this._snackBar.open('Product added to cart', '', {
      duration: 3000
    })
  }
}
