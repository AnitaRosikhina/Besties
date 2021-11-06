import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ProductModalComponent} from "../product-modal/product-modal.component";
import {IProduct} from "../../../layouts/admin/pages/product-addition-page/product-addition-page.component";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProduct

  count = 1;

  constructor(public dialog: MatDialog) { }

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
}
