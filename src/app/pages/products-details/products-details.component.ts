import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
