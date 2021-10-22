import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cats-page',
  templateUrl: './cats-page.component.html',
  styleUrls: ['./cats-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
