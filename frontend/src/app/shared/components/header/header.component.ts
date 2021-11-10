import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginModalComponent} from "../login-modal/login-modal.component";
import {JwtHelperService} from "@auth0/angular-jwt";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginService]
})
export class HeaderComponent {
  @Output() toggleDrawer = new EventEmitter<void>();

  usersEmail: string;

  constructor(public dialog: MatDialog,
              private jwtHelperService: JwtHelperService,
              private cdr: ChangeDetectorRef,
              private loginService: LoginService) {
    this.usersEmail = this.loginService.getDecodedUser()?.email
  }

  get loggedIn(): boolean {
    return !this.jwtHelperService.isTokenExpired()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginModalComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.cdr.detectChanges()
    });
  }

  logout(): void {
    this.loginService.logout()
  }
}
