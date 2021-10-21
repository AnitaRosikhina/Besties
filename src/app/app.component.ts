import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.drawer.close();
    })
  }
}
