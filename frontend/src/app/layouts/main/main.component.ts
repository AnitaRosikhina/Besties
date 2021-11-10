import {Component, OnInit, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {LoginModalComponent} from "../../shared/components/login-modal/login-modal.component";
import {LoginService} from "../../shared/services/login.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  usersEmail: string;

  @ViewChild('drawer') drawer: MatDrawer

  constructor(private router: Router,
              private dialog: MatDialog,
              private jwtHelperService: JwtHelperService,
              private cdr: ChangeDetectorRef,
              private loginService: LoginService) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.drawer.close();
    })
  }

  get loggedIn(): boolean {
    return !this.jwtHelperService.isTokenExpired()
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginModalComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.cdr.detectChanges()
    });
  }

  logout(): void {
    this.loginService.logout()
  }
}
