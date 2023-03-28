import {Component, OnInit} from '@angular/core';
import {DialogRegistrationComponent} from "./dialog-registration/dialog-registration.component";
import {MatDialog} from "@angular/material/dialog";
import {RegistrationService} from "./registration.service";
import {Router} from "@angular/router";
import {HttpStatusCode} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  uid?: string;
  unauthorized = false;

  constructor(public dialog: MatDialog,
              private registrationService: RegistrationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.openDialog()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRegistrationComponent, {disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.onCreateUser(result);
      } else
        console.error("Unknown error!")
    });
  }


  onCreateUser(nick: string): void {
    this.registrationService.register(nick).subscribe(
      (response) => {
        console.log(response);
        this.uid = response.uid;
        this.router.navigate(['/game']);
      },(error:any)=> error.status == HttpStatusCode.Unauthorized ? this.unauthorized = true : 0);
  }
}
