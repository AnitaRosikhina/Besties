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

  value: number = 40;
  highValue: number = 60;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  constructor() { }

  ngOnInit(): void {
  }

}
