import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-birds-page',
  templateUrl: './birds-page.component.html',
  styleUrls: ['./birds-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BirdsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
