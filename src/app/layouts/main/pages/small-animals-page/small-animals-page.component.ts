import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-small-animals-page',
  templateUrl: './small-animals-page.component.html',
  styleUrls: ['./small-animals-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallAnimalsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
