import {Component, OnInit, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {LoginModalComponent} from "../../shared/components/login-modal/login-modal.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer

  constructor(private router: Router,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.drawer.close();
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
