import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonButtonComponent implements OnInit {
  @Input() text: string
  @Input() classes: string[]
  constructor() { }

  ngOnInit(): void {
  }

}
