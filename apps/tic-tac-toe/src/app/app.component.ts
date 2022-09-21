import {Component, OnInit} from '@angular/core';
import {UserService} from "./service/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'tic-tac-toe';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.onCreateUser('Player One');
    this.onCreateUser('Player Two');
  }

  onCreateUser(nick: string):void{
  this.userService.createUser(nick).subscribe(
    (response) => console.log(response),
    (error: any)=>console.log(error),
    ()=>console.log('Done getting users')
    );
  }
}
