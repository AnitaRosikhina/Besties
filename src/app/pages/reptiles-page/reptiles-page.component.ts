import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reptiles-page',
  templateUrl: './reptiles-page.component.html',
  styleUrls: ['./reptiles-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReptilesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
