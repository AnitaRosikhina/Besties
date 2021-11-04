import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shop-all-page',
  templateUrl: './shop-all-page.component.html',
  styleUrls: ['./shop-all-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopAllPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
