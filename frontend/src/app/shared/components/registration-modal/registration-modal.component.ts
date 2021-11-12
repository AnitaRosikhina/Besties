import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {LoginService} from "../../services/login.service";

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
              private dialogRef: MatDialogRef<RegistrationModalComponent>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  submit(): void {
    this.loginService.register(this.form.value).subscribe(() => {
      console.log('SNACKBAR YOUVE REGISTERED SUCCESSFUL');
      this.dialogRef.close();
    })
  }
}
