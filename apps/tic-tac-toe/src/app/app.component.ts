import {Component, OnInit} from '@angular/core';
import {UserService} from "./service/user.service";
import {MatDialog} from '@angular/material/dialog';
import {DialogRegistrationComponent} from "./register/dialog-registration/dialog-registration.component";
import {RegistrationService} from "./registration.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'tic-tac-toe';
  version = 'alpha 0.1';

  constructor(public registrationService: RegistrationService) {}


  ngOnInit() {
  }
}
