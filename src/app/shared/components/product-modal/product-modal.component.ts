import {Component, OnInit, ChangeDetectionStrategy, Input, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IProductRequest} from "../../models/product";


interface DialogData {
  product: IProductRequest
}

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductModalComponent implements OnInit {
  @Input() product: IProductRequest

  count = 1

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

  changeCount(product: IProductRequest, status: boolean) {
    if(status) {
      ++this.count
    }
    else if(!status && this.count > 1) {
      --this.count
    }
  }
}
