import {Component, OnInit} from '@angular/core';
import {RegistrationService} from "./register/registration.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tic-tac-toe';
  version = 'alpha 0.1';

  constructor(public registrationService: RegistrationService) {
  }


  ngOnInit() {
  }
}
