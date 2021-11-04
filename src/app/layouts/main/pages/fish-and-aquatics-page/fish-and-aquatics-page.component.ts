import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-fish-and-aquatics-page',
  templateUrl: './fish-and-aquatics-page.component.html',
  styleUrls: ['./fish-and-aquatics-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FishAndAquaticsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
