import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-dialog-select-name-overview',
  templateUrl: './dialog-registration.component.html',
  styleUrls: ['./dialog-registration.component.css'],
})
export class DialogRegistrationComponent implements OnInit{
  userName?: string;
  registrationForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogRegistrationComponent>) {}
  ngOnInit(){
    this.registrationForm = this.fb.group({
      name: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')])
    })
  }

  onOkClick() {
    const nameValue = this.registrationForm.get('name')?.value;
    this.dialogRef.close(nameValue);
  }
}
