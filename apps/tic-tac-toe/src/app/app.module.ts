import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BoardModule } from './board/board.module';
import { SquareModule } from './square/square.module';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule, BoardModule, SquareModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
