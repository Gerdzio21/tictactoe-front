import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { SquareModule } from '../square/square.module';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, SquareModule],
  exports: [BoardComponent]
})
export class BoardModule {}
