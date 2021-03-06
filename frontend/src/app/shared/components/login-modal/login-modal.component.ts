import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RegistrationModalComponent} from "../registration-modal/registration-modal.component";
import {LoginService} from "../../services/login.service";
import {LOGGED_USER_ID} from "../../constants/tokens-name";
import {tap} from "rxjs/operators";
import {merge} from "rxjs";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginService]
})
export class LoginModalComponent implements OnInit {
  form: FormGroup;

  constructor(private dialog: MatDialog,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<LoginModalComponent>,
              private loginService: LoginService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  submit(): void {
    merge(
      this.loginService.getUser(this.form.value.email).pipe(tap((res) => localStorage.setItem(LOGGED_USER_ID, res._id))),
      this.loginService.login(this.form.value)
    ).subscribe(() => {
      this.dialogRef.close()
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegistrationModalComponent);
    this.dialogRef.close();
    dialogRef.afterClosed().subscribe(() => {
      this.cdr.detectChanges()
    });
  }
}
