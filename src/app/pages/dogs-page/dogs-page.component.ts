import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dogs-page',
  templateUrl: './dogs-page.component.html',
  styleUrls: ['./dogs-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
