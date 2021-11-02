import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {IProductRequest} from "../../models/product";
import {MatDialog} from "@angular/material/dialog";
import {ProductModalComponent} from "../product-modal/product-modal.component";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input() product: IProductRequest

  count = 1;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changeCount(product: IProductRequest, increase: boolean) {
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

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
