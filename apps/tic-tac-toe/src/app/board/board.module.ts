import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { SquareModule } from '../square/square.module';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, SquareModule, MatCardModule],
  exports: [BoardComponent]
})
export class BoardModule {}
