import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {LoginService} from "../../services/login.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginService]
})
export class RegistrationModalComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private dialogRef: MatDialogRef<RegistrationModalComponent>,
              private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  submit(): void {
    this.loginService.register(this.form.value).subscribe(() => {
      this._snackBar.open(`You've been registered successful!`, 'Close', {
        duration: 3000
      })
      this.dialogRef.close();
    })
  }
}
