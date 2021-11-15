import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IProduct} from "../../models/product.model";

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

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
}
