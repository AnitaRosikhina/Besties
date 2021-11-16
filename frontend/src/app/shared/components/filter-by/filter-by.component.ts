import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Options} from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterByComponent implements OnInit {
  @Input() items: string[]

  @Output() filterByItem = new EventEmitter<string>()
  @Output() filterByPrice = new EventEmitter<{ value: number, highValue: number }>()

  value = 1
  highValue = 135
  options: Options = {
    floor: 1,
    ceil: 135
  }

  constructor() { }

  ngOnInit(): void {
  }

  filterByPriceLW($event: number) {
    this.value = $event
    this.filterByPrice.emit({value: this.value, highValue: this.highValue})
  }

  filterByPriceHW($event: number) {
    this.highValue = $event
    this.filterByPrice.emit({value: this.value, highValue: this.highValue})
  }
}
