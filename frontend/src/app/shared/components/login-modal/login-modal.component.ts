import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RegistrationModalComponent} from "../registration-modal/registration-modal.component";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginModalComponent implements OnInit {
  form: FormGroup;

  constructor(private dialog: MatDialog,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<LoginModalComponent>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  submit(): void {
    this.dialogRef.close();
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegistrationModalComponent);
    this.dialogRef.close();
    dialogRef.afterClosed().subscribe();
  }
}
