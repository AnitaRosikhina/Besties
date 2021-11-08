import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
