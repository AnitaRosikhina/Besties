import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortByComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
