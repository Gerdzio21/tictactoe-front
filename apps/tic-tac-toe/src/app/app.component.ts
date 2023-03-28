import {Component, OnInit} from '@angular/core';
import {UserService} from "./service/user.service";
import {MatDialog} from '@angular/material/dialog';
import {DialogRegistrationComponent} from "./dialog-registration/dialog-registration.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'tic-tac-toe';
  uid?: string;
  isSpinning?: boolean;
  constructor(private userService: UserService, public dialog: MatDialog) {}


  ngOnInit() {
    this.openDialog();
    this.isSpinning = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRegistrationComponent,{disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result != undefined){
        this.onCreateUser(result);
        this.isSpinning = true;
      }else
        console.error("Unknown error!")
    });
  }


  onCreateUser(nick: string):void{
  this.userService.createUser(nick).subscribe(
    (response) => {console.log(response); this.uid=response.uid; this.isSpinning = false;}, //tutaj powinno wywalić event złapany przez board
    (error: any)=>console.log(error),
    ()=>console.log('Done getting users')
    );
  }
}
